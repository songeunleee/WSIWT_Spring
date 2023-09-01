package com.example.wsiwt_back.domain.web.dto.ootd;

import com.example.wsiwt_back.domain.clothes.Clothes;
import com.example.wsiwt_back.domain.ootd.OOTD;
import lombok.Builder;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class OOTDSaveRequestDto {

    private String content;
    private String author;
    private String url;

    @Builder
    public OOTDSaveRequestDto(String content, String author,String url){
        this.content = content;
        this.author = author;
     //   this.image = image;
        this.url = url;

    }

    public OOTD toEntity(){
        return OOTD.builder().content(content).author(author).url(url).build();
    }
}
