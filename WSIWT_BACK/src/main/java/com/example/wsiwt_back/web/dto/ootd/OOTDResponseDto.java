package com.example.wsiwt_back.web.dto.ootd;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.comment.CommentRepository;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.web.dto.comment.CommentResponseDto;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter

public class OOTDResponseDto {

    private Long id;
    private String content;
    private String author;
    private String imgUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<CommentResponseDto> comments;

    public OOTDResponseDto(OOTD ootd){
        this.id = ootd.getId();
        this.content = ootd.getContent();
        this.author = ootd.getAuthor();
        this.imgUrl = ootd.getUrl();
        this.createdAt = ootd.getCreatedDate();
        this.updatedAt = ootd.getModifiedDate();
        this.comments = ootd.getComments().stream().map(CommentResponseDto::new)
                .collect(Collectors.toList());;

    }



}
