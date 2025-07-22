package com.jobportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.entity.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, Long>{
  
}
