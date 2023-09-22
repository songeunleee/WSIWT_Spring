package com.example.wsiwt_back.service;

import com.example.wsiwt_back.domain.user.UserEntity;
import com.example.wsiwt_back.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserEntity create(final UserEntity userEntity){
        if(userEntity == null || userEntity.getUsername()==null){
            throw new RuntimeException("Invalid argument");
        }
        final String username = userEntity.getUsername();
            if (userRepository.existsByUsername(username)){
                log.warn("Username already sxists {}",username);
                throw new RuntimeException("Username already sxists");
            }

            return userRepository.save(userEntity);
    }

    public UserEntity getByCredentials(final String username, final String password){
        return userRepository.findByUsernameAndPassword(username,password);
    }

}
