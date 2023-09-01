package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.domain.web.dto.ootd.OOTDSaveRequestDto;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OOTDApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private OOTDRepository ootdRepository;

    @After("")
    public void rearDown() throws Exception {
        ootdRepository.deleteAll();
    }

    @Test
    public void OOTD_등록() throws Exception {
        //given
        String content = "content";
        String url = "url";

        OOTDSaveRequestDto requestDto = OOTDSaveRequestDto.builder().content(content).author("123456").build();

        String URL = "http://localhost:" + port + "/api/ootd";

        //when
        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(URL,requestDto,Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);
        List<OOTD> all = ootdRepository.findAll();
        assertThat(all.get(0).getContent()).isEqualTo(content);


    }

}
