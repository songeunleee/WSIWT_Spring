package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@DataJpaTest
public class OOTDRepositoryTest {

    @Autowired
    OOTDRepository ootdRepository;

    @Test
    @DisplayName("OOTD 저장")
    public void saveOOTD(){
        //given
        OOTD ootd = OOTDSaveRequestDto.builder().content("내용").author("작성자").url("이미지 주소").build().toEntity();

        //when
        OOTD result = ootdRepository.save(ootd);

        //then
        Assertions.assertEquals(result.getId(),ootd.getId());
        Assertions.assertEquals(result.getContent(),ootd.getContent());
        Assertions.assertEquals(result.getAuthor(),ootd.getAuthor());
        Assertions.assertEquals(result.getUrl(),ootd.getUrl());
        Assertions.assertEquals(result.getCreatedAt(),ootd.getCreatedAt());
        Assertions.assertEquals(result.getUpdatedAt(),ootd.getUpdatedAt());

    }

    @Test
    @DisplayName("OOTD 조회")
    public void findOOTD(){
        //given
        OOTD ootd1 = OOTDSaveRequestDto.builder().content("내용1").author("작성자1").url("이미지 주소1").build().toEntity();
        OOTD ootd2 = OOTDSaveRequestDto.builder().content("내용2").author("작성자2").url("이미지 주소2").build().toEntity();
        OOTD ootd3 = OOTDSaveRequestDto.builder().content("내용3").author("작성자3").url("이미지 주소3").build().toEntity();

        ootdRepository.save(ootd1);
        ootdRepository.save(ootd2);
        ootdRepository.save(ootd3);

        //when
        List<OOTD> resList = ootdRepository.findAll();

        //then
        Assertions.assertEquals(resList.size(),3);


    }


}
