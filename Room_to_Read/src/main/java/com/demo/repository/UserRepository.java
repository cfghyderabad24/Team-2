package com.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.User;

@Repository
public interface UserRepository  extends JpaRepository<User, String>{
	
	User findByEmail(String email);

}
