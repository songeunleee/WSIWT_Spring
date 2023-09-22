package com.example.wsiwt_back.config.auth;

import com.example.wsiwt_back.domain.user.Role;
import jdk.jfr.Enabled;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@CrossOrigin
public class SecurityConfig {
    private final CustomOAuth2UserService customOAuth2UserService;

    @Bean
    public SecurityFilterChain newFilterChain(HttpSecurity http) throws Exception {
        http

                .cors().and()
                .csrf().ignoringAntMatchers("/h2-console/**").disable()



                .headers().frameOptions().disable()

                .and()

                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/","/css/**","/images/**","/js/**","/h2-console/**","/profile","/auth/**","/ootds","/api/v1/**").permitAll()
                        .antMatchers().hasRole(Role.USER.name())
                        .anyRequest().authenticated())

                .logout(logout -> logout
                        .logoutSuccessUrl("http://localhost:3000"))

                .oauth2Login()
                .defaultSuccessUrl("http://localhost:3000")
                .userInfoEndpoint()
                .userService(customOAuth2UserService)

                ;


        return http.build();
    }

}
