package com.example.wsiwt_back.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PageRequestDto {
    private int page; // 페이지 지정
    private int size; // 한 페이지에 나올 객체 사이즈 지정
}
