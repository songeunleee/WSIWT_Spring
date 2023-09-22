package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
@NoArgsConstructor
@Getter

@Entity
@EntityListeners(AuditingEntityListener.class)
public class OOTD extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    public String content;

    private String author;

    @Builder
    public OOTD(Long id, String content, String author, String url){
        this.id = id;
        this.content = content;
        this.author = author;
        this.url = url;

    }

    public void update(String content){
        this.content = content;
    }
}
