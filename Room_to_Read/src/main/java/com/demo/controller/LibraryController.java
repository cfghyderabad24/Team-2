package com.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Book;
import com.demo.entity.Transaction;
import com.demo.entity.User;
import com.demo.repository.BookRepository;
import com.demo.repository.TransactionRepository;
import com.demo.service.LibraryService;
import com.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController


public class LibraryController {

	@Autowired
	private LibraryService libraryService;

	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private UserService uservice;

	// to check-in any book
	
	
	
	@PostMapping("/registration")
	public User saveUser(@RequestBody User user) {
		
		return uservice.saveUser(user);
		
	}
		
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		return uservice.findByEmail(user.getEmail());
	}
	
	@PostMapping("/checkin/{bookId}/{studentId}")
	public ResponseEntity<String> checkInBook(@PathVariable Long bookId,@PathVariable Long studentId) {
		if (libraryService.checkInBook(bookId,studentId)) {
			return ResponseEntity.ok("Book checked in successfully");
		}
		return ResponseEntity.badRequest().body("Failed to check in the book");
	}

	// to checkout any book
	@PostMapping("/checkout/{bookId}/{userId}")
	public ResponseEntity<String> checkOutBook(@PathVariable Long bookId, @PathVariable Long userId) {
	    if (libraryService.checkOutBook(bookId, userId)) {
	        return ResponseEntity.ok("Book checked out successfully");
	    }
	    return ResponseEntity.badRequest().body("Failed to check out the book");
	}
	// to add a new book
	@PostMapping("/addNewBook")
	public ResponseEntity<String> addBook(@RequestBody Book book) {
		bookRepository.save(book);
		return ResponseEntity.ok().body("Book added successully");
	}

	// to check the list of available books
	@GetMapping("/viewAllBooks")
	public ResponseEntity<Iterable<Book>> viewBooks() {
		return ResponseEntity.ok().body(bookRepository.findAll());
	}

	// to check the list of available books
		@GetMapping("/viewAllTransactions")
		public ResponseEntity<Iterable<Transaction>> viewTransactions() {
			
			return ResponseEntity.ok().body(transactionRepository.findAll());
		}
	
	
}
