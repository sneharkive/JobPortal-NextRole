package com.jobportal.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Applicant {
  private Long applicantId;
  private LocalDateTime timeStamp;
  private ApplicationStatus applicationStatus;

}
