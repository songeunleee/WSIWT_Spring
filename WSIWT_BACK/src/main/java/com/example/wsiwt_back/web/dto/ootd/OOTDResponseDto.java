package com.example.wsiwt_back.web.dto.ootd;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.comment.CommentRepository;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.user.UserEntity;
import com.example.wsiwt_back.web.dto.PageResponeDto;
import com.example.wsiwt_back.web.dto.comment.CommentResponseDto;
import com.example.wsiwt_back.web.dto.user.AuthorDto;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter

public class OOTDResponseDto {

    private Long id;
    private String content;
    private AuthorDto author;
    private String imgUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private PageResponeDto commentPage;
    private List<CommentResponseDto> comments;



    public OOTDResponseDto(OOTD ootd, Page page){
        this.id = ootd.getId();
        this.content = ootd.getContent();
        this.author = new AuthorDto(ootd.getUser());
        this.imgUrl = ootd.getUrl();
        this.createdAt = ootd.getCreatedDate();
        this.updatedAt = ootd.getModifiedDate();
        this.commentPage = new PageResponeDto(page);
        this.comments = ootd.getComments().stream().filter(item->item.getDepth() == 0L).map(CommentResponseDto::new)
                .collect(Collectors.toList());



    }



}
