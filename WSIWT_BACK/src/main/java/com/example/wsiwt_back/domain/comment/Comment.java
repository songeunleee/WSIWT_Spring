package com.example.wsiwt_back.domain.comment;

import com.example.wsiwt_back.domain.BaseTimeEntity;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@NoArgsConstructor
@Getter

@Entity
@EntityListeners(AuditingEntityListener.class)
public class Comment  extends BaseTimeEntity {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid",strategy = "uuid")

    private String id;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ootd_id")
    @JsonIgnore
    public OOTD ootd;

    @Column(nullable = false)

    public String content;

    private String author;

    private String userId;

    @Builder
    public Comment(String id,  String content, String author, String userId, OOTD ootd){
        this.id = id;
        this.content = content;
        this.author = author;
        this.userId = userId;
        this.ootd = ootd;
    }

    public void update(String content){
        this.content = content;

    }

}
