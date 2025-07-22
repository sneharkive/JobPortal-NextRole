package com.jobportal.service;

import org.springframework.stereotype.Service;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.exception.JobPortalException;

@Service
public interface ProfileService {
  public Long createProfile(String email) throws JobPortalException;

  public ProfileDTO getProfile(Long id) throws JobPortalException;

  public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;
  // void deleteProfile(Long id);
}
