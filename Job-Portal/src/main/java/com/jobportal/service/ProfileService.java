package com.jobportal.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jobportal.dto.ProfileDTO;
import com.jobportal.exception.JobPortalException;

@Service
public interface ProfileService {
  public Long createProfile(String email, String name) throws JobPortalException;

  public ProfileDTO getProfile(Long id) throws JobPortalException;

  public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;
  // void deleteProfile(Long id);

  public List<ProfileDTO> getAllProfile() throws JobPortalException;
}
