package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.User;
import com.demo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository urepo;
	
	 public User findByEmail(String email) {
	        return urepo.findByEmail(email);
	    }
	 public User saveUser(User user) {
			return urepo.save(user);
		}

}
