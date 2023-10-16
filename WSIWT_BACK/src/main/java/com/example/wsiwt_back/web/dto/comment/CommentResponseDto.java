package com.example.wsiwt_back.web.dto.comment;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.ootd.OOTD;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommentResponseDto {

    private String id;
    private String content;
    private String author;

    private Long depth;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long ootdId;
    private List<CommentResponseDto> child;



    public CommentResponseDto(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.author = comment.getAuthor();

        this.depth = comment.getDepth();
        this.child = comment.getChild().stream().map(CommentResponseDto::new)
                .collect(Collectors.toList());
        this.ootdId = comment.getOotd().getId();
        this.createdAt = comment.getCreatedDate();
        this.updatedAt = comment.getModifiedDate();


    }

}
