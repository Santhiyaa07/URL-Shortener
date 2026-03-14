package com.urlshortener.controller;
import com.urlshortener.entity.Url;
import com.urlshortener.service.UrlService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class UrlController {
    private final UrlService service;
    public UrlController(UrlService service){
        this.service=service;
    }

    @GetMapping("/test")
    public String test(){
        return "API Working";
    }
    @PostMapping("/api/urls")
    public Url createUrl(@RequestBody Map<String,String> body){
        String originalUrl=body.get("url");
        return service.createShortUrl(originalUrl);
    }
    @GetMapping("/api/urls")
    public List<Url> getUrls(){
        return service.getAllUrls();
    }
    @GetMapping("/api/analytics/{shortCode}")
    public Url getAnalytics(@PathVariable String shortCode){
        return service.getByShortCode(shortCode);
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<?> redirect(@PathVariable String shortCode){

        Url url = service.getByShortCode(shortCode);

        if(url == null){
            return ResponseEntity.notFound().build();
        }

        service.incrementClicks(url);

        return ResponseEntity
                .status(HttpStatus.FOUND)
                .location(URI.create(url.getOriginalUrl()))
                .build();
    }
}
