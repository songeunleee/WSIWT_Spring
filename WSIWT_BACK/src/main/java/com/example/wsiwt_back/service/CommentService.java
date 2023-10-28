package com.example.wsiwt_back.service;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.comment.CommentRepository;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.web.dto.comment.CommentUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Slf4j

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public Comment save(Comment entity){


        return commentRepository.save(entity);
    }

    public Comment findById(String id)
    {return  commentRepository.findById(id)
            .orElseThrow(()->new IllegalArgumentException(" not exist : " + id)); }


    public void delete(String id,String userId){

        Comment comment = commentRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. id="+id));
        System.out.println(userId);
        System.out.println(comment.getUserId());
        if(!comment.getUserId().equals(userId)  ){
            log.warn("댓글을 작성한 사람만 삭제할 수 있습니다.");
            throw new RuntimeException("댓글을 작성한 사람만 삭제할 수 있습니다.");
        }

        commentRepository.deleteById(id);
    }

    @Transactional
    public Comment update(String id,String userId, CommentUpdateRequestDto requestDto){


        Comment comment = commentRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. id="+id));
        System.out.println(userId);
        System.out.println(comment.getUserId());
        if(!comment.getUserId().equals(userId)  ){
            log.warn("댓글을 작성한 사람만 삭제할 수 있습니다.");
            throw new RuntimeException("댓글을 작성한 사람만 삭제할 수 있습니다.");
        }

        comment.update(requestDto.getContent());
        return comment;
    }



}
