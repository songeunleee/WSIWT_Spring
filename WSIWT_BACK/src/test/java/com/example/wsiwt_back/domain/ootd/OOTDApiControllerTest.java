package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.web.OOTDApiController;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import com.example.wsiwt_back.service.OOTDService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.api.Assertions;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class OOTDApiControllerTest {

    @Mock
    private OOTDService ootdService;
    @InjectMocks
    private OOTDApiController ootdApiController;

    private MockMvc mockMvc;

    private ObjectMapper objectMapper = new ObjectMapper();



   @BeforeEach
   public void initMockMvc(){
       mockMvc = MockMvcBuilders
               .standaloneSetup(ootdApiController)
               .build();
   }

    @Test
    @DisplayName("OOTD등록 API")
    public void OOTD_등록() throws Exception {
        //given
        String content = "content";
        String url = "url";

        OOTDSaveRequestDto requestDto = OOTDSaveRequestDto.builder().content(content).author("123456").url("sdffsd").build();

        //stub
        given(ootdService.save(any())).willReturn(anyLong());


        //when
       mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/ootd")
                .content(objectMapper.writeValueAsString(requestDto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isCreated());

        //then
        verify(ootdService).save(any());



    }

    @Test
    @DisplayName("OOTD조회 API")
    public void OOTD_조회() throws Exception {
        //given
        List<OOTD> list = new ArrayList<>();

        list.add(OOTD.builder().id(0L).content("content").author("author").url("url").build());
        list.add(OOTD.builder().id(0L).content("content").author("author").url("url").build());
        list.add(OOTD.builder().id(0L).content("content").author("author").url("url").build());

        //stub
        given(ootdService.findAll()).willReturn(list);

        //when
     mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/ootds")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());



        //then
      verify(ootdService).findAll();

    }

    @Test
    @DisplayName("OOTD수정 API")
    public void OOTD_업데이트() throws Exception {
        //given
        Long Id = 0L;
        OOTDUpdateRequestDto requestDto = OOTDUpdateRequestDto.builder().content("12345").build();
        OOTD ootd = OOTD.builder().id(Id).content(requestDto.getContent()).author("작성자").url("url").build();

        //stub
       given(ootdService.update(anyLong(),any())).willReturn(ootd);

        //when
       MvcResult result = mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/ootd/"+Id)
                        .content(objectMapper.writeValueAsString(requestDto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
               .andReturn();


        //then
        verify(ootdService).update(anyLong(),any());

        JSONObject response = new JSONObject(result.getResponse().getContentAsString());
        Assertions.assertThat(response.get("content")).isEqualTo(requestDto.getContent());


    }

    @Test
    @DisplayName("OOTD삭제 API")
    public void OOTD_삭제() throws Exception {
        //given
        Long Id = 0L;


        //stub


        //when
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/ootd/"+Id)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());


        //then
        verify(ootdService).delete(Id);




    }
}
