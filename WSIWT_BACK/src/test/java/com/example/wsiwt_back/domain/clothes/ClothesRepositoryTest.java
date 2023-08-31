package com.example.wsiwt_back.domain.clothes;


import com.example.wsiwt_back.dmain.clothes.Clothes;
import com.example.wsiwt_back.dmain.clothes.ClothesRepository;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class ClothesRepositoryTest {

    @Autowired
    ClothesRepository clothesRepository;

    @After("")
    public void cleanup(){
        clothesRepository.deleteAll();
    }

    @Test
    public void 옷저장(){
        //given
        String name = "갈색 가디건";
        String category = "얇은 가디건";

        clothesRepository.save(Clothes.builder().name(name).category(category).author("dd").type(Arrays.asList(3,4)).build());

        //when
        List<Clothes> clothesList = clothesRepository.findAll();

        //then

        Clothes clothes = clothesList.get(0);

    }
}
