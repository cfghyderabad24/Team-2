package com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Book;
import com.demo.entity.Student;
import com.demo.entity.Transaction;


@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByStudent(Student student);
    List<Transaction> findByBook(Book book);
}