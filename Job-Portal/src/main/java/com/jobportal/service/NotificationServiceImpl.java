package com.jobportal.service;

import java.time.LocalDateTime;
import java.util.List;
import com.jobportal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.NotificationDTO;
import com.jobportal.dto.NotificationStatus;
import com.jobportal.entity.Notification;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.NotificationRepository;

@Service
public class NotificationServiceImpl implements NotificationService {

  @Autowired
  private NotificationRepository notificationRepo;

  @Override
  public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException {
    notificationDTO.setId(Utilities.getNextSequence("notification"));
    notificationDTO.setStatus(NotificationStatus.UNREAD);
    notificationDTO.setTimestamp(LocalDateTime.now());
    notificationRepo.save(notificationDTO.toEntity());
  }

  @Override
  public List<Notification> getUnreadNotification(Long userId) throws JobPortalException {
    return notificationRepo.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
  }

  @Override
  public void readNotification(Long id) throws JobPortalException {
    Notification noti = notificationRepo.findById(id)
        .orElseThrow(() -> new JobPortalException("No Notification Found"));

    noti.setStatus(NotificationStatus.READ);
    notificationRepo.save(noti);
  }

}
