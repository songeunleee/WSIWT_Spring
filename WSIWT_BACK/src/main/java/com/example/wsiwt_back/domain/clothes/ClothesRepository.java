package com.example.wsiwt_back.domain.clothes;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClothesRepository extends JpaRepository<Clothes,Long> {

    List<Clothes> findByUserId(String userId);


}
