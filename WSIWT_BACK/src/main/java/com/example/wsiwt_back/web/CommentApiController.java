package com.example.wsiwt_back.web;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.user.UserEntity;
import com.example.wsiwt_back.service.CommentService;
import com.example.wsiwt_back.service.OOTDService;
import com.example.wsiwt_back.service.UserService;
import com.example.wsiwt_back.web.dto.ResponseDto;
import com.example.wsiwt_back.web.dto.comment.CommentSaveRequestDto;
import com.example.wsiwt_back.web.dto.comment.CommentUpdateRequestDto;

import com.example.wsiwt_back.web.dto.user.UserDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"comment"})
@Tag(name = "comment", description = "댓글에 대한 Create Update Delete")
@RequiredArgsConstructor
@RestController
public class CommentApiController {

    private final CommentService commentService;
    private final OOTDService ootdService;
    private final UserService userService;


    @ApiOperation(value = "comment create")
    @ApiResponse(responseCode = "200", description = "댓글 작성 성공" )
    @PostMapping(value = {"/api/v1/{ootdId}/comment","/api/v1/{ootdId}/comment/{id}"})
    public ResponseEntity<?> save(@AuthenticationPrincipal String userId,@PathVariable Long ootdId,@PathVariable(required = false) String id, @RequestBody CommentSaveRequestDto requestDto){
            OOTD ootd = ootdService.findById(ootdId);
            UserEntity user = userService.findById(userId);
            Comment comment;
            if(id == null){
                 comment = Comment.builder().user(user).author(requestDto.getAuthor()).content(requestDto.getContent()).ootd(ootd).depth(0L).build();
            }else{
                Comment parentComment = commentService.findById(id);
                Long depth = parentComment.getDepth() + 1;
                comment = Comment.builder().user(user).author(requestDto.getAuthor()).content(requestDto.getContent()).ootd(ootd).depth(depth).parent(parentComment).build();
            }

        return  ResponseEntity.status(HttpStatus.CREATED).body(commentService.save(comment));
    }
    @ApiOperation(value = "comment update")
    @ApiResponse(responseCode = "200", description = "댓글 수정 성공" )
    @PutMapping("api/v1/comment/{id}")
    public ResponseEntity<?> update(@AuthenticationPrincipal String userId, @PathVariable String id, @RequestBody CommentUpdateRequestDto requestDto){

        try {
            Comment updatedComment = commentService.update(id, userId, requestDto);
            return ResponseEntity.ok().body(updatedComment);
        }catch  (Exception e){
            ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();

            return ResponseEntity.badRequest().body(responseDto);
        }
    }
    @ApiOperation(value = "comment delete")
    @ApiResponse(responseCode = "200", description = "댓글 삭제 성공" )
    @DeleteMapping("api/v1/comment/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal String userId, @PathVariable String id ){
        try{
            commentService.delete(id,userId);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();
            return ResponseEntity.badRequest().body(responseDto);
        }


    }


}
