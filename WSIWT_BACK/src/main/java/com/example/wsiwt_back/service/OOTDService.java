package com.example.wsiwt_back.service;

import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.ootd.OOTDRepository;
import com.example.wsiwt_back.domain.user.UserRepository;
import com.example.wsiwt_back.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.web.dto.ootd.OOTDUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Slf4j

@Service
public class OOTDService {

    private final OOTDRepository ootdRepository;


    public Long save(OOTD entity){
        //String url = "images/winter_hat.png";
        return ootdRepository.save(entity).getId();
    }

    public OOTD findById(Long id)
    {return  ootdRepository.findById(id)
            .orElseThrow(()->new IllegalArgumentException(" not exist : " + id)); }

    public List<OOTD> findAll(){
        return ootdRepository.findAll();
    }

    public void delete(Long id,String userId){

        OOTD ootd = ootdRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));
        System.out.println(userId);
        System.out.println(ootd.getUserId());
        if(!ootd.getUserId().equals(userId)  ){
            log.warn("글을 작성한 사람만 삭제할 수 있습니다.");
            throw new RuntimeException("글을 작성한 사람만 삭제할 수 있습니다.");
        }

        ootdRepository.deleteById(id);
    }

    @Transactional
    public OOTD update(Long id,String userId, OOTDUpdateRequestDto requestDto){


        OOTD ootd = ootdRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));
        if(!ootd.getUserId().equals(userId)  ){
            log.warn("글을 작성한 사람만 수정할 수 있습니다.");
            throw new RuntimeException("글을 작성한 사람만 수정할 수 있습니다.");
        }

        ootd.update(requestDto.getContent(), requestDto.getUrl());
        return ootd;
    }


}
