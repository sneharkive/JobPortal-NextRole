package com.jobportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.dto.NotificationStatus;
import com.jobportal.entity.Notification;

@Repository
public interface NotificationRepository extends  MongoRepository<Notification, Long> {
  public List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
