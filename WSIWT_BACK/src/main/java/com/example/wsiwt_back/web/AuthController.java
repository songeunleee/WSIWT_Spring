package com.example.wsiwt_back.web;

import com.example.wsiwt_back.config.auth.dto.SessionUser;
import com.example.wsiwt_back.service.ootd.OOTDService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class AuthController {

    private final HttpSession httpSession;

   // @CrossOrigin
    @GetMapping("/auth/login")
    public ResponseEntity<SessionUser> logincheck(){
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        System.out.println(1);
        if(user == null){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(user);
        }
        else {
            return ResponseEntity.ok(user);
        }
    }




}
