package com.example.wsiwt_back.web.dto.ootd;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.comment.CommentRepository;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.user.UserEntity;
import com.example.wsiwt_back.web.dto.PageResponeDto;
import com.example.wsiwt_back.web.dto.comment.CommentResponseDto;
import com.example.wsiwt_back.web.dto.user.AuthorDto;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter

public class OOTDResponseDto {

    @ApiModelProperty(value = "OOTD 게시물의 id", example = "1")
    private Long id;
    @ApiModelProperty(value = "OOTD의 게시물의 내용", example = "string")
    private String content;
    @ApiModelProperty(value = "OOTD 작성자 정보")
    private AuthorDto author;
    @ApiModelProperty(value = "OOTD 게시물의 이미지 주소", example = "url")
    private String imgUrl;
    @ApiModelProperty(value = "OOTD 게시물의 생성 시간")
    private LocalDateTime createdAt;
    @ApiModelProperty(value = "OOTD 게시물의 수정 시간")
    private LocalDateTime updatedAt;
 //   private PageResponeDto commentPage;
 @ApiModelProperty(value = "OOTD 게시물의 댓글 리스트")
    private List<CommentResponseDto> comments;



    public OOTDResponseDto(OOTD ootd){
        this.id = ootd.getId();
        this.content = ootd.getContent();
        this.author = new AuthorDto(ootd.getUser());
        this.imgUrl = ootd.getUrl();
        this.createdAt = ootd.getCreatedDate();
        this.updatedAt = ootd.getModifiedDate();
     //   this.commentPage = new PageResponeDto(page);
        this.comments = ootd.getComments().stream().filter(item->item.getDepth() == 0L).map(CommentResponseDto::new)
                .collect(Collectors.toList());



    }



}
