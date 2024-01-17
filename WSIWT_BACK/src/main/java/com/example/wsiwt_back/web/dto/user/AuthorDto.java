package com.example.wsiwt_back.web.dto.user;

import com.example.wsiwt_back.domain.user.UserEntity;
import lombok.*;

@Getter

// 작성자 정보를 사용할때만 쓰는 Dto
public class AuthorDto {

    private String username;
    private String id;
    private String picture;
    public AuthorDto(UserEntity user) {
        this.username = user.getUsername();
        this.id = user.getId();
        this.picture = user.getPicture();

    }
}


