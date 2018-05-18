package com.macro.MacroHealthApp.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.macro.MacroHealthApp.model.Item;

@Repository
public interface ItemRepo extends MongoRepository<Item, String>{

}
