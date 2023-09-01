package com.example.wsiwt_back.service.clothes;

import com.example.wsiwt_back.domain.clothes.Clothes;
import com.example.wsiwt_back.domain.clothes.ClothesRepository;
import com.example.wsiwt_back.domain.web.dto.clothes.ClothesSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class ClothesService{

    private final ClothesRepository clothesRepository;

    public Clothes save(ClothesSaveRequestDto requestDto){
        String url = "dd";
        return clothesRepository.save(requestDto.toEntity(url));
    }



}
