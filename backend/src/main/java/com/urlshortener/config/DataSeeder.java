package com.urlshortener.config;

import com.urlshortener.entity.Url;
import com.urlshortener.repository.UrlRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;

import java.time.LocalDateTime;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedData(UrlRepository repo) {
        return args -> {

            System.out.println("Seeding initial URLs...");

            if(repo.count() == 0) {

                repo.save(new Url(null,"https://google.com","abc1",
                        LocalDateTime.now().minusDays(6),10));

                repo.save(new Url(null,"https://github.com","abc2",
                        LocalDateTime.now().minusDays(5),5));

                repo.save(new Url(null,"https://youtube.com","abc3",
                        LocalDateTime.now().minusDays(4),8));

                repo.save(new Url(null,"https://amazon.com","abc4",
                        LocalDateTime.now().minusDays(3),3));

                repo.save(new Url(null,"https://stackoverflow.com","abc5",
                        LocalDateTime.now().minusDays(2),6));

                repo.save(new Url(null,"https://openai.com","abc6",
                        LocalDateTime.now().minusDays(1),9));

                repo.save(new Url(null,"https://linkedin.com","abc7",
                        LocalDateTime.now().minusHours(12),2));

                repo.save(new Url(null,"https://twitter.com","abc8",
                        LocalDateTime.now().minusHours(6),4));

                repo.save(new Url(null,"https://facebook.com","abc9",
                        LocalDateTime.now().minusHours(3),7));

                repo.save(new Url(null,"https://reddit.com","abc10",
                        LocalDateTime.now().minusHours(1),1));
            }
        };
    }
}