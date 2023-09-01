package com.example.wsiwt_back.domain.web.dto.ootd;

import com.example.wsiwt_back.domain.ootd.OOTD;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class OOTDResponseDto {

    private Long id;
    private String content;
    private String author;
    private String imgUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public OOTDResponseDto(OOTD ootd){
        this.id = ootd.getId();
        this.content = ootd.getContent();
        this.author = ootd.getAuthor();
        this.imgUrl = ootd.getUrl();
        this.createdAt = ootd.getCreatedAt();
        this.updatedAt = ootd.getUpdatedAt();
    }

}
