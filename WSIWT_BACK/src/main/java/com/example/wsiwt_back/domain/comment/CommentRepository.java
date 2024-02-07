package com.example.wsiwt_back.domain.comment;

import com.example.wsiwt_back.domain.ootd.OOTD;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,String> {
}
