package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.entity.OTP;
import com.jobportal.entity.User;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.OTPRepository;
import com.jobportal.repository.UserRepository;
import com.jobportal.utility.Data;
import com.jobportal.utility.Utilities;

import jakarta.mail.internet.MimeMessage;



@Service(value="userService")

public class UserServiceImpl implements UserService{

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private OTPRepository otpRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JavaMailSender mailSender;

  @Autowired
  private ProfileService profileService;


  @Override
  public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
    Optional<User> opt = userRepository.findByEmail(userDTO.getEmail());
    if(opt.isPresent()) throw new JobPortalException("USER_FOUND");

    userDTO.setProfileId(profileService.createProfile(userDTO.getEmail(), userDTO.getName()));

    userDTO.setId(Utilities.getNextSequence("users"));
    userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

    User user = userDTO.toEntity();
    user = userRepository.save(user);

    return user.toDTO();
  }


  @Override
  public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException{
    User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
    if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) throw new JobPortalException(("INVALID_CREDENTIALS"));
    return user.toDTO();
  }


  @Override
  public Boolean sendOtp(String email) throws Exception {
    User user = userRepository.findByEmail(email).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
    MimeMessage mm = mailSender.createMimeMessage();
    MimeMessageHelper message = new MimeMessageHelper(mm, true);
    message.setTo(email);
    message.setSubject("Your OTP for NextRole");
    String genOTP = Utilities.generateOtp();

    OTP otp = new OTP(email, genOTP, LocalDateTime.now());

    otpRepository.save(otp);
    message.setText(Data.getMessageBody(genOTP, user.getName()), true);
    mailSender.send(mm);
    return true;
  }


  @Override
  public void verifyOtp(String email, String otp) throws JobPortalException {
    OTP otpEntity = otpRepository.findById(email)
        .orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));

    if (!otpEntity.getOtpCode().equals(otp)) throw new JobPortalException("OTP_INCORRECT");
    
    // otpRepository.delete(otpEntity);
    return;
  }


  @Override
  public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException {
    User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
    user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
    userRepository.save(user);
    return new ResponseDTO("Password changed successfully.");
  }


  @Scheduled(fixedRate = 600000) // Runs every 10 minutes
  public void removeExpiredOtps() {
    LocalDateTime expiry = LocalDateTime.now().minusMinutes(10);
    List<OTP> expiredOtps = otpRepository.findByCreationTimeBefore(expiry);
    if (!expiredOtps.isEmpty()) 
      otpRepository.deleteAll(expiredOtps);
     
  }


  @Override
  public UserDTO getUserById(Long id) throws JobPortalException {
    return userRepository.findById(id).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND")).toDTO();
  }
  

}
