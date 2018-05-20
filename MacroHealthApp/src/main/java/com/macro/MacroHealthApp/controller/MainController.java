package com.macro.MacroHealthApp.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.log4j.*;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.macro.MacroHealthApp.model.*;
import com.macro.MacroHealthApp.resources.*;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.macro.MacroHealthApp.repo.*;

import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.BulkWriteOperation;
import com.mongodb.BulkWriteResult;
import com.mongodb.Cursor;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.ParallelScanOptions;
import com.mongodb.ServerAddress;
import com.mongodb.WriteResult;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.Mongo;
import com.mongodb.MongoException;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSDBFile;
import com.mongodb.gridfs.GridFSInputFile;

@RestController
@RequestMapping("/rest")
@CrossOrigin("*")
public class MainController {

	@Autowired
	UserRepo userRepo;
	
	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	OrderProductRepo orderProductRepo;
	
	@Autowired
	ItemRepo itemRepo;
	
	//@RequestMapping(value="/getSearchResult",method = RequestMethod.GET)
	@RequestMapping("/getSearchResult/{searchText}")
	public List<Item> getSearchResult(@PathVariable("searchText") String searchText ){
		 System.out.println(searchText);
		String searchStr=searchText.toLowerCase();
		List<Item> list=new ArrayList<Item>();
		
		list=itemRepo.findAll();
		System.out.println(list);
		List<Item> list1=new ArrayList<Item>();
		
		for(Item item:list){
			
			if(item.getName().toLowerCase().contains(searchStr)){
				
				list1.add(item);
			}
			
		}
		
		return list1;
		
	}
	
	@RequestMapping(value = "/saveItem", method = RequestMethod.POST)
	@Consumes("application/json")
	public Item saveItem(@RequestBody Item item, UriComponentsBuilder ucBuilder) throws IOException{
		//System.out.println(s);
		Item newItem=new Item();
		System.out.println("inside saveitem");
		
		System.out.println(item.getName());
		newItem.setName(item.getName());
		newItem.setCalories(item.getCalories());
		newItem.setCarbs(item.getCarbs());
		newItem.setFat(item.getFat());
		newItem.setFiber(item.getFiber());
		newItem.setProtein(item.getProtein());
		
		
		System.out.println(newItem);
		newItem=itemRepo.save(newItem);
		
		System.out.println(newItem);
		
		
		
		
		return newItem;
	}
	

}
