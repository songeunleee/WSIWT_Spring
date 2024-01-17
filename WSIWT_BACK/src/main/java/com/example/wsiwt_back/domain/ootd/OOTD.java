package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.domain.BaseTimeEntity;
import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.comment.CommentRepository;
import com.example.wsiwt_back.domain.user.UserEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter

@Entity
@EntityListeners(AuditingEntityListener.class)
public class OOTD extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    private String url;

    @Column(nullable = false)
    public String content;

    private String author;

    @JsonIgnore
    @ManyToOne( fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity user;



    @JsonIgnore
    @OneToMany(mappedBy = "ootd",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();



    @Builder
    public OOTD(Long id, String content, String author, String url, UserEntity user,List<Comment> comments){
        this.id = id;
        this.content = content;
        this.author = author;
        this.url = url;
        this.user = user;
        this.comments = comments;

    }

    public void update(String content, String url){
        this.content = content;
        this.url = url;
    }
}
