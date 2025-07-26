package com.jobportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.JobDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.exception.JobPortalException;
import com.jobportal.service.JobService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {

  @Autowired
  private JobService jobService;

  @PostMapping("/post")
  public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException  {
    jobDTO = jobService.postJob(jobDTO);
    return new ResponseEntity<>(jobDTO, HttpStatus.CREATED);
  }

  @GetMapping("/getAll")
  public ResponseEntity<List<JobDTO>> getAllJobs() throws JobPortalException  {
    return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
  }

  @GetMapping("/get/{id}")
  public ResponseEntity<JobDTO> getJob( @PathVariable Long id) throws JobPortalException  {
    return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);
  }

  @PostMapping("/apply/{id}")
  public ResponseEntity<ResponseDTO> applyJob( @PathVariable Long id, @RequestBody @Valid ApplicantDTO applicantDTO) throws JobPortalException  {
    jobService.applyJob(id, applicantDTO);
    return new ResponseEntity<>(new ResponseDTO ("Applied Successfully") , HttpStatus.OK);
  }
  
  
  @GetMapping("/postedBy/{id}")
  public ResponseEntity<List<JobDTO>> getJobsPostedBy( @PathVariable Long id) throws JobPortalException  {
    return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);
  }


  @PostMapping("/changeAppStatus")
  public ResponseEntity<ResponseDTO> changeAppStatus(@RequestBody @Valid Application application) throws JobPortalException  {
    jobService.changeAppStatus(application);
    return new ResponseEntity<>(new ResponseDTO ("Application Status Changed Successfully") , HttpStatus.OK);
  }


}


