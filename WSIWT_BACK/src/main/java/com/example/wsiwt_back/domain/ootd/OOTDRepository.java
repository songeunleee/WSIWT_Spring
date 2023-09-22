package com.example.wsiwt_back.domain.ootd;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OOTDRepository extends JpaRepository<OOTD,Long> {

    @Query("select t from OOTD t where t.author = ?1")
    List<OOTD> findByAuthor(String author);

}
