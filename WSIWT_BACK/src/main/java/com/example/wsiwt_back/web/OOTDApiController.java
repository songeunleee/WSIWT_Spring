package com.example.wsiwt_back.web;

import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.web.dto.PageRequestDto;
import com.example.wsiwt_back.web.dto.PageResponeDto;
import com.example.wsiwt_back.web.dto.ResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.OOTDService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
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

    @PostMapping("/ootds")
    public ResponseEntity<?> findAllOOTDs(@RequestBody PageRequestDto requestDto){

        PageRequest pageable = PageRequest.of(requestDto.getPage(), 5, Sort.by("id").descending());
        Page<OOTD> page = ootdService.findOOTDAsPagenation(pageable);
        List<OOTDResponseDto> ootds = page
               .stream()
                .map(item-> new OOTDResponseDto(item,page))
                .collect(Collectors.toList());

        Map<String,Object> result = new HashMap<>();

        result.put("page",new PageResponeDto(page));
        result.put("content",ootds);

        return ResponseEntity.ok().body(result);
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
