package com.example.wsiwt_back.web.dto.clothes;

import com.example.wsiwt_back.domain.clothes.Clothes;
import com.example.wsiwt_back.web.dto.comment.CommentResponseDto;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ClothesResponseDto {

    private Long id;
    private String name;
    private List<Integer> type;
    private String category;
    private String url;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public ClothesResponseDto(Clothes clothes){
        this.id = clothes.getId();
        this.name = clothes.getName();
        this.category = clothes.getCategory();
        this.createdAt = clothes.getCreatedDate();
        this.updatedAt = clothes.getModifiedDate();
        this.type = clothes.getType();
        this.url = clothes.getUrl();
    }
}


