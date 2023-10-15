package com.example.wsiwt_back.web.dto.comment;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.ootd.OOTD;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommentResponseDto {

    private String id;
    private String content;
    private String author;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private OOTD ootd;
    public CommentResponseDto(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.author = comment.getAuthor();

        this.createdAt = comment.getCreatedDate();
        this.updatedAt = comment.getModifiedDate();

        this.ootd = comment.getOotd();
    }

}
