package com.example.wsiwt_back.domain.clothes;

import com.example.wsiwt_back.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor

@Entity
public class Clothes extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;


    private String url;

    private String author;

    @ElementCollection
    private List<Integer> type;

    @Builder
    public Clothes(String name, String category, String url, String author, List<Integer> type){
        this.name = name;
        this.category = category;
        this.url = url;
        this.author = author;
        this.type = type;
    }

}
