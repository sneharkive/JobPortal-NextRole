package com.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.entity.Notification;
import com.jobportal.service.NotificationService;


@RestController
@CrossOrigin
@Validated
@RequestMapping("/notification")
public class NotificationAPI {
  @Autowired
  private NotificationService notiService;

  @GetMapping("/get/{userId}")
  public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long userId){
    return new ResponseEntity<>(notiService.getUnreadNotification(userId), HttpStatus.OK);
  }
}
