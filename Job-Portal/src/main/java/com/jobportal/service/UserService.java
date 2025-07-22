package com.jobportal.service;

import org.springframework.stereotype.Service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JobPortalException;


@Service
public interface UserService {
  public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

  public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
}
