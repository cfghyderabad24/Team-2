package com.demo.exception;

public class NoSuchBookException extends RuntimeException {
    public NoSuchBookException(String message){
        super(message);
    }
}
