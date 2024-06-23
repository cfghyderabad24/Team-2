package com.demo.service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.entity.Book;
import com.demo.entity.Transaction;
import com.demo.entity.Student;
import com.demo.repository.BookRepository;
import com.demo.repository.TransactionRepository;
import com.demo.repository.StudentRepository;

@Service
public class LibraryService {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private TransactionRepository transactionRepository;

	@Transactional
	public boolean checkInBook(Long bookId, Long studentId) {
		Optional<Book> optionalBook = bookRepository.findById(bookId);

		if (optionalBook.isPresent() && (optionalBook.get().getAvailable() >= 1)) {
			Book book = optionalBook.get();
			book.setCheckedOut(false);
			book.setReadFrequency(book.getReadFrequency() + 1);
			book.setAvailable(book.getAvailable() - 1);
			bookRepository.save(book);

			List<Transaction> transactions = transactionRepository.findByBook(book);

			Transaction transactionNew = new Transaction();
			transactionNew.setBook(book);
			transactionNew.setStudent(studentRepository.getById(studentId));
			transactionNew.setCheckInDate(LocalDateTime.now());
			transactionNew.setDueDate(LocalDateTime.now().plusDays(15));
			transactionNew.setCheckOutDate(null);
			transactionNew.setStatus("checked-in");
			transactionNew.setComments("comment");
			transactionRepository.save(transactionNew);

			return true;

		}
		return false;
	}

	@Transactional
	public boolean checkOutBook(Long bookId, Long userId) {
	    Optional<Book> optionalBook = bookRepository.findById(bookId);
	    Optional<Student> optionalStudent = studentRepository.findById(userId);

	    if (optionalBook.isPresent() && optionalStudent.isPresent()) {
	        Book book = optionalBook.get();
	        Student student = optionalStudent.get();

	        book.setCheckedOut(true);
	        book.setAvailable(book.getAvailable() + 1);
	        bookRepository.save(book);

	        List<Transaction> transactionList = transactionRepository.findByBook(book);

	        for (Transaction transaction : transactionList) {
	            if (transaction.getStudent().getId().equals(userId) && transaction.getBook().getId().equals(bookId)) {
	                Transaction obj = transactionRepository.getById(transaction.getId());
	                obj.setCheckOutDate(LocalDateTime.now());
	                obj.setStatus("checked-out");
	                obj.setComments("comment");
	                transactionRepository.save(obj);
	                return true;
	            }
	        }

	        // Create a new transaction if no matching transaction found
	        Transaction newTransaction = new Transaction();
	        newTransaction.setBook(book);
	        newTransaction.setStudent(student);
	        newTransaction.setCheckOutDate(LocalDateTime.now());
	        newTransaction.setStatus("checked-out");
	        newTransaction.setComments("New checkout");
	        transactionRepository.save(newTransaction);
	        return true;
	    }

	    return false;
	}

	
}