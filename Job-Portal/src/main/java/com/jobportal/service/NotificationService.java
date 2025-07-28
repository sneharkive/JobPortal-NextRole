package com.jobportal.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JobPortalException;

@Service
public interface NotificationService {
  public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException ;
  public List<Notification> getUnreadNotification(Long userId) throws JobPortalException;
  public void readNotification(Long id) throws JobPortalException;
}
