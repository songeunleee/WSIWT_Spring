package com.example.wsiwt_back.web.dto;


import lombok.Getter;
import org.springframework.data.domain.Page;
@Getter
public class PageResponeDto  {


    private int totalPages;
    private long totalElements;
    private int pageNumber;
    private boolean isFirst;
    private boolean isLast;
    private boolean hasNext;
    private boolean hasPrevious;


    public PageResponeDto(Page page){
        this.totalPages = page.getTotalPages();
        this.totalElements = page.getTotalElements();
        this.pageNumber = page.getNumber();
        this.isFirst = page.isFirst();
        this.isLast = page.isLast();
        this.hasNext = page.hasNext();
        this.hasPrevious = page.hasPrevious();

    }

}

