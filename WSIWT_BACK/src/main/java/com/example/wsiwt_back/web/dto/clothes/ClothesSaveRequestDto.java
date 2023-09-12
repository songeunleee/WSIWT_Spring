package com.example.wsiwt_back.web.dto.clothes;

import com.example.wsiwt_back.domain.clothes.Clothes;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class ClothesSaveRequestDto {
    private String name;
    private List<Integer> type;
    private String category;
    private String author;
    private MultipartFile image;

    public Clothes toEntity(String url){
        return Clothes.builder().name(name).type(type).category(category).author(author).url(url).build();
    }
}
