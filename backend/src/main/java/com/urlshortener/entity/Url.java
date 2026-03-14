package com.urlshortener.entity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
@Entity
public class Url {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortCode;
    private LocalDateTime createdAt;
    private int clickCount;
    public Url(){}
    public Long getId(){
        return id;
    }
    public String getOriginalUrl(){
        return originalUrl;
    }
    public void setOriginalUrl(String originalUrl){
        this.originalUrl=originalUrl;
    }
    public String getShortCode(){
        return shortCode;
    }
    public void setShortCode(String shortCode){
        this.shortCode=shortCode;
    }

    public LocalDateTime getCreatedAt(){
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt){
        this.createdAt=createdAt;
    }
    public int getClickCount(){
        return clickCount;
    }
    public void setClickCount(int clickCount){
        this.clickCount=clickCount;
    }
}
