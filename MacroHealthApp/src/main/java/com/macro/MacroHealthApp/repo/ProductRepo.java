package com.macro.MacroHealthApp.repo;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.macro.MacroHealthApp.model.Product;

@Repository
public interface ProductRepo extends MongoRepository<Product, String> {

	List<Product> findByName(String name);
	
	   
}
