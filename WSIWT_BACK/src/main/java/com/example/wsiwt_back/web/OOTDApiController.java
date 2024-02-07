package com.example.wsiwt_back.web;

import com.example.wsiwt_back.domain.comment.Comment;
import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.user.UserEntity;
import com.example.wsiwt_back.domain.user.UserRepository;
import com.example.wsiwt_back.service.CommentService;
import com.example.wsiwt_back.service.UserService;
import com.example.wsiwt_back.web.dto.PageRequestDto;
import com.example.wsiwt_back.web.dto.PageResponeDto;
import com.example.wsiwt_back.web.dto.ResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDPaginationResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDResponseDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.OOTDService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.persistence.MapKey;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
@Api( tags = {"OOTD"})
@Tag(name = "OOTD", description = "OOTD에 대한 CRUD")

@RequiredArgsConstructor
@RestController

public class OOTDApiController {

    private final OOTDService ootdService;
    private final UserService userService;

    @ApiOperation(value = "ootd create")
    @ApiResponse(responseCode = "200", description = "ootd 생성 성공" )
    @PostMapping("/api/v1/ootd")
    public ResponseEntity<?> save(@AuthenticationPrincipal String userId, @RequestBody OOTDSaveRequestDto requestDto){

        UserEntity user = userService.findById(userId);
        OOTD ootd = OOTD.builder().user(user).url(requestDto.getUrl()).author(requestDto.getAuthor()).content(requestDto.getContent()).build();

        return  ResponseEntity.status(HttpStatus.CREATED).body(ootdService.save(ootd));
    }
    @ApiOperation(value = "ootd read")
    @ApiResponse(responseCode = "200", description = "모든 ootd 읽어오기" )
    @PostMapping("/ootds")
    public ResponseEntity<OOTDPaginationResponseDto> findAllOOTDs(@RequestBody PageRequestDto requestDto){

        PageRequest pageable = PageRequest.of(requestDto.getPage(), 5, Sort.by("id").descending());
        Page<OOTD> page = ootdService.findOOTDAsPagenation(pageable);


        List<OOTDResponseDto> ootds = page
               .stream()
                .map(item-> new OOTDResponseDto(item))
                .collect(Collectors.toList());

        OOTDPaginationResponseDto responseDto = new OOTDPaginationResponseDto(ootds,new PageResponeDto(page));

        return ResponseEntity.ok().body(responseDto);
    }
    @ApiOperation(value = "ootd update")
    @ApiResponse(responseCode = "200", description = "ootd 수정 성공" )
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
    @ApiOperation(value = "ootd delete")
    @ApiResponse(responseCode = "200", description = "ootd 삭제 성공" )
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
