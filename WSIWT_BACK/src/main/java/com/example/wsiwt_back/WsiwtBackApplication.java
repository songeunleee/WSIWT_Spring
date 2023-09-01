package com.example.wsiwt_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class WsiwtBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(WsiwtBackApplication.class, args);
    }

}
