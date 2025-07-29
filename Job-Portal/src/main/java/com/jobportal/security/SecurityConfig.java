package com.jobportal.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jobportal.jwt.JwtAuthenticationEntryPoint;
import com.jobportal.jwt.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Autowired
  private JwtAuthenticationEntryPoint point;

  @Autowired
  private JwtAuthenticationFilter filter;

  
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      // http.authorizeHttpRequests((req) ->
      // req.requestMatchers("/**")
      // .permitAll().anyRequest().authenticated());
      // http.csrf(csrf->csrf.disable());

      // return http.build();

      http.csrf(csrf -> csrf.disable())
              .authorizeRequests(requests -> requests
                      .requestMatchers("/auth/login", "/users/register", "/users/verifyOtp/**", "/user/sendOtp/**").permitAll()
                      .anyRequest()
                      .authenticated()).exceptionHandling(ex -> ex.authenticationEntryPoint(point))
              .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }

}
