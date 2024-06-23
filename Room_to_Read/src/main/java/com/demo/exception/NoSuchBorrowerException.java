package com.demo.exception;

public class NoSuchBorrowerException extends RuntimeException{
    public NoSuchBorrowerException(String message){
        super(message);
    }
}
