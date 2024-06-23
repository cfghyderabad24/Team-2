package com.demo.exception;

public class NoSuchBookLoanException extends RuntimeException {
    public NoSuchBookLoanException(String msg) {
        super(msg);
    }
}
