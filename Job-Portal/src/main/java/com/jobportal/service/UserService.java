package com.jobportal.service;

import org.springframework.stereotype.Service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JobPortalException;


@Service
public interface UserService {
  public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

  public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

  public Boolean sendOtp(String email) throws Exception;

  public void verifyOtp(String email, String otp) throws JobPortalException;

  public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;

  public UserDTO getUserByEmail(String email) throws JobPortalException ;

  // By Me

  public UserDTO getUserById(Long id) throws JobPortalException ;
}
