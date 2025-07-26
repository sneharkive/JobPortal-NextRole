package com.jobportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.entity.Job;

@Repository
public interface JobRepository extends MongoRepository<Job, Long> {
  public List<Job> findByPostedBy(Long postedBy);
}
