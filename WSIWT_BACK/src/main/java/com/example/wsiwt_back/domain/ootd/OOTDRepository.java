package com.example.wsiwt_back.domain.ootd;

import com.example.wsiwt_back.domain.comment.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OOTDRepository extends JpaRepository<OOTD,Long> {

//    @Query("select t from OOTD t where t.userId = ?1")
//    List<OOTD> findByUserId(String UserId);
    @Override
    @EntityGraph(attributePaths = {"user"} )
    Page<OOTD> findAll(Pageable pageable);


}
