package com.example.wsiwt_back.web;

import com.example.wsiwt_back.domain.clothes.Clothes;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.service.ClothesService;
import com.example.wsiwt_back.web.dto.ResponseDto;
import com.example.wsiwt_back.web.dto.clothes.ClothesResponseDto;
import com.example.wsiwt_back.web.dto.clothes.ClothesSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class ClothesApiController {

    private final ClothesService clothesService;

    @PostMapping("/api/v1/clothes")
    public ResponseEntity<?> save(@AuthenticationPrincipal String userId, @RequestBody ClothesSaveRequestDto requestDto){

        Clothes clothes = Clothes.builder().userId(userId).url(requestDto.getUrl()).name(requestDto.getName()).category(requestDto.getCategory()).type(requestDto.getType()).build();

        return  ResponseEntity.status(HttpStatus.CREATED).body(clothesService.save(clothes));
    }

    @GetMapping("/api/v1/clothes")
    public ResponseEntity<?> findById(@AuthenticationPrincipal String userId){
       List<ClothesResponseDto> responseDto = clothesService.FindByUserId(userId).stream().map( ClothesResponseDto::new).collect(Collectors.toList());

       return ResponseEntity.ok().body(responseDto);
    }

    @DeleteMapping("api/v1/clothes/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal String userId,@PathVariable Long id){
        try{
            clothesService.DeleteById(id);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();

            return ResponseEntity.badRequest().body(responseDto);
        }


    }

}
