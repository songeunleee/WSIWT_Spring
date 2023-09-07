package com.example.wsiwt_back.domain.web;

import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.web.dto.ootd.OOTDResponseDto;
import com.example.wsiwt_back.domain.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.domain.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.ootd.OOTDService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController

public class OOTDApiController {

    private final OOTDService ootdService;

    @PostMapping("/api/ootd")
    public ResponseEntity<Long> save(@RequestBody OOTDSaveRequestDto requestDto){
        return  ResponseEntity.status(HttpStatus.CREATED).body(ootdService.save(requestDto));
    }

    @GetMapping("api/ootds")
    public ResponseEntity<List<OOTDResponseDto>> findAllOOTDs(){
        List<OOTDResponseDto> ootds = ootdService.findAll()
                .stream()
                .map(OOTDResponseDto::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(ootds);
    }

    @PutMapping("api/ootd/{id}")
    public ResponseEntity<OOTD> update(@PathVariable Long id, @RequestBody OOTDUpdateRequestDto requestDto){
        OOTD updatedOOTD = ootdService.update(id,requestDto);
        return ResponseEntity.ok().body(updatedOOTD);
    }

    @DeleteMapping("api/ootd/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        ootdService.delete(id);
        return ResponseEntity.ok().build();
    }


}
