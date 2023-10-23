package com.example.wsiwt_back.web;

import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.web.dto.ResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.OOTDService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController

public class OOTDApiController {

    private final OOTDService ootdService;

    @PostMapping("/api/v1/ootd")
    public ResponseEntity<Long> save(@AuthenticationPrincipal String userId, @RequestBody OOTDSaveRequestDto requestDto){

        OOTD ootd = OOTD.builder().userId(userId).url(requestDto.getUrl()).author(requestDto.getAuthor()).content(requestDto.getContent()).build();

        return  ResponseEntity.status(HttpStatus.CREATED).body(ootdService.save(ootd));
    }

    @GetMapping("/ootds")
    public ResponseEntity<List<OOTDResponseDto>> findAllOOTDs(){
        List<OOTDResponseDto> ootds = ootdService.findAll()
                .stream()
                .map(OOTDResponseDto::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(ootds);
    }

    @PutMapping("api/v1/ootd/{id}")
    public ResponseEntity<?> update(@AuthenticationPrincipal String userId, @PathVariable Long id, @RequestBody OOTDUpdateRequestDto requestDto){

       try {
           OOTD updatedOOTD = ootdService.update(id, userId, requestDto);
           return ResponseEntity.ok().body(updatedOOTD);
       }catch  (Exception e){
           ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();

           return ResponseEntity.badRequest().body(responseDto);
       }
    }

    @DeleteMapping("api/v1/ootd/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal String userId,@PathVariable Long id){
        try{
            ootdService.delete(id,userId);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();

            return ResponseEntity.badRequest().body(responseDto);
        }


    }


}
