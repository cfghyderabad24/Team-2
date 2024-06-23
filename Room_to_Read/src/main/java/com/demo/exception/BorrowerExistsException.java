package com.demo.exception;

public class BorrowerExistsException extends RuntimeException {
    public BorrowerExistsException(String msg) {
        super(msg);
    }
}
