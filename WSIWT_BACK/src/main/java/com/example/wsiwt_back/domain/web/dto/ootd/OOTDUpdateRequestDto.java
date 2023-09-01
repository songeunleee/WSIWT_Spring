package com.example.wsiwt_back.domain.web.dto.ootd;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor

public class OOTDUpdateRequestDto {

    private String content;

    @Builder
    public OOTDUpdateRequestDto(String content){
        this.content = content;
    }
}
