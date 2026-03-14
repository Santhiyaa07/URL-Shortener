package com.urlshortener.service;
import com.urlshortener.entity.Url;
import com.urlshortener.repository.UrlRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@Service
public class UrlService {
    private final UrlRepository repository;
    public UrlService(UrlRepository repository){
        this.repository=repository;
    }
    public Url createShortUrl(String originalUrl){
        Url url=new Url();
        url.setOriginalUrl(originalUrl);
        url.setShortCode(generateShortCode());
        url.setCreatedAt(LocalDateTime.now());
        url.setClickCount(0);
        return repository.save(url);
    }
    public List<Url> getAllUrls(){
        return repository.findAll();
    }
    public Url getByShortCode(String code){
        return repository.findByShortCode(code).orElseThrow();
    }
    public void incrementClicks(Url url){
        url.setClickCount(url.getClickCount()+1);
        repository.save(url);
    }
    private String generateShortCode(){
        return UUID.randomUUID().toString().substring(0,6);
    }
}
