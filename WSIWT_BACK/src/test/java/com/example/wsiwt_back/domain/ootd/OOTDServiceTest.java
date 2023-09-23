package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.OOTDService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class OOTDServiceTest {

    private OOTDService ootdService;

    @Mock
    private OOTDRepository ootdRepository;

    @Test
    @DisplayName("OOTD생성")
    public void saveOOTD(){
        //given
        OOTDSaveRequestDto requestDto = OOTDSaveRequestDto.builder().content("내용").author("작성자").url("이미지 주소").build();
        OOTD ootd = requestDto.toEntity();
        //stub
        given(ootdRepository.save((OOTD) any())).willReturn(ootd);

        //when
         ootdService.save(ootd);

        //then
        verify(ootdRepository).save((OOTD) any());

    }

    @Test
    @DisplayName("OOTD조회")
    public void readOOTD(){
        //given
        List<OOTD> ootdList = new ArrayList<>();
        ootdList.add(new OOTD(0L,"내용","작성자","url","ID"));
        ootdList.add(new OOTD(1L,"내용1","작성자1","url1","Id"));
        ootdList.add(new OOTD(2L,"내용2","작성자2","url2","id"));

        //stub
        given(ootdRepository.findAll()).willReturn(ootdList);

        //when
        List<OOTD> resultList = ootdService.findAll();

        //then
        Assertions.assertEquals(resultList.size(),3);

    }

    @Test
    @DisplayName("OOTD수정")
    public void updateOOTD(){
        //given
       Long Id = 0l;
        List<OOTD> ootdList = new ArrayList<>();
       OOTD save = OOTD.builder().id(0L).content("Original Content").author("author").url("url").build();
       ootdList.add(save);
       OOTDUpdateRequestDto edit = OOTDUpdateRequestDto.builder().content("edit content").build();

        //stub
        given(ootdRepository.findById(Id)).willReturn(Optional.of(save));
        given(ootdRepository.findAll()).willReturn(ootdList);

        //when
        ootdService.update(Id,edit);
        OOTD result = ootdService.findAll().get(0);

        //then
        Assertions.assertEquals(result.getContent(),edit.getContent());

    }

    @Test
    @DisplayName("OOTD삭제")
    public void deleteOOTD(){
        //given
        Long Id = 0l;


        //stub


        //when
        ootdService.delete(Id);


        //then
        verify(ootdRepository).deleteById(Id);

    }
}
