package com.demo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "book_name")
	private String bookName;
    
    @Column(name = "author_name")
    private String authorName;
    
//    @Column(name = "level_number")
//    private String levelNumber;
    
    @Column(name = "read_frequency")
    private Long readFrequency;
    
    @Column(name = "language")
	private String language;
    
    @Column(name = "book_color")
    private String bookColor;
    
    @Column(name = "checked_out")
    private boolean checkedOut;
    
	private Integer available;
  

	public Integer getAvailable() {
		return available;
	}

	public void setAvailable(Integer available) {
		this.available = available;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

//	public String getLevelNumber() {
//		return levelNumber;
//	}
//
//	public void setLevelNumber(String levelNumber) {
//		this.levelNumber = levelNumber;
//	}

	public Long getReadFrequency() {
		return readFrequency;
	}

	public void setReadFrequency(Long readFrequency) {
		this.readFrequency = readFrequency;
	}

	

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getBookColor() {
		return bookColor;
	}

	public void setBookColor(String bookColor) {
		this.bookColor = bookColor;
	}

	public boolean isCheckedOut() {
		return checkedOut;
	}

	public void setCheckedOut(boolean checkedOut) {
		this.checkedOut = checkedOut;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", bookName=" + bookName + ", authorName=" + authorName + ", readFrequency="
				+ readFrequency + ", language=" + language + ", bookColor=" + bookColor + ", checkedOut=" + checkedOut
				+ ", available=" + available + "]";
	}

	

	
    
	
}