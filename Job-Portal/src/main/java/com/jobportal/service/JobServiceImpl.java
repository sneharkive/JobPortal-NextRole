package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.JobRepository;
import com.jobportal.utility.Utilities;


@Service
public class JobServiceImpl implements JobService{

  @Autowired
  private JobRepository jobRepository;

  @Override
  public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
    jobDTO.setId(Utilities.getNextSequence("jobs"));
    jobDTO.setPostTime(LocalDateTime.now());

    return jobRepository.save(jobDTO.toEntity()).toDTO();
  }

  @Override
  public List<JobDTO> getAllJobs() throws JobPortalException {
    return jobRepository.findAll().stream().map((x) -> x.toDTO()).toList();
  }

  @Override
  public JobDTO getJob(Long id)  throws JobPortalException{
    return jobRepository.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND")).toDTO();
  }

  

}
