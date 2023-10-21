package com.example.wsiwt_back.web.dto.clothes;

import com.example.wsiwt_back.domain.clothes.Clothes;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
public class ClothesSaveRequestDto {
    private String name;
    private List<Integer> type;
    private String category;
    private String author;
    private String url;

    public Clothes toEntity(){
        return Clothes.builder().name(name).type(type).category(category).url(url).build();
    }
}
