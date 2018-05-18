package com.macro.MacroHealthApp.repo;



import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.macro.MacroHealthApp.model.OrderProduct;

@Repository
public interface OrderProductRepo extends MongoRepository<OrderProduct, String>  {

}
