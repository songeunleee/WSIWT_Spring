package com.example.wsiwt_back.service.ootd;

import com.example.wsiwt_back.domain.ootd.OOTD;
import com.example.wsiwt_back.domain.ootd.OOTDRepository;
import com.example.wsiwt_back.domain.web.dto.ootd.OOTDSaveRequestDto;
import com.example.wsiwt_back.domain.web.dto.ootd.OOTDUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor

@Service
public class OOTDService {

    private final OOTDRepository ootdRepository;


    public OOTD save(OOTDSaveRequestDto requestDto){
        //String url = "images/winter_hat.png";
        return ootdRepository.save(requestDto.toEntity());
    }
    public List<OOTD> findAll(){
        return ootdRepository.findAll();
    }

    public void delete(Long id){
        ootdRepository.deleteById(id);
    }

    @Transactional
    public OOTD update(Long id, OOTDUpdateRequestDto requestDto){
        OOTD ootd = ootdRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));
        ootd.update(requestDto.getContent());

        return ootd;
    }
}
