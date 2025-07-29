package com.jobportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.jwt.AuthenticationRequest;
import com.jobportal.jwt.AuthenticationResponse;
import com.jobportal.jwt.JwtHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthAPI {
  @Autowired
  private UserDetailsService userDetailsService;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtHelper jwtHelper;

  @PostMapping("/login")
  public ResponseEntity<?> createAuthToken(@RequestBody AuthenticationRequest req) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));
    final UserDetails userDetails = userDetailsService.loadUserByUsername(req.getEmail());
    final String jwt = jwtHelper.generateToken(userDetails);
    return ResponseEntity.ok(new AuthenticationResponse(jwt));
  }
  

}
