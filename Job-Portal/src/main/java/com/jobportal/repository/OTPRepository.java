package com.jobportal.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.entity.OTP;

@Repository
public interface OTPRepository extends MongoRepository<OTP, String> {
  // Iterable<? extends OTP> findByCreatedAtBefore(LocalDateTime expiry);

  List<OTP> findByCreationTimeBefore(LocalDateTime expiry);

  
}
