package com.jobportal.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JobPortalException;

@Service
public interface JobService {

  public JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

  public List<JobDTO> getAllJobs() throws JobPortalException;

  public JobDTO getJob(Long id) throws JobPortalException ;

  public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;
  
}
