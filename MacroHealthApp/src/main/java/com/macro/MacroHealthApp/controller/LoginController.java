package com.macro.MacroHealthApp.controller;


import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.log4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.macro.MacroHealthApp.model.*;
import com.macro.MacroHealthApp.resources.*;
import com.macro.MacroHealthApp.repo.*;



@RestController
@RequestMapping("/loginApi")
@CrossOrigin("*")
public class LoginController {

	
	@Autowired
	UserRepo userRepo;
	
	
	
	
	
	
	@PostMapping("/login")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getUserDetails(User user) throws Exception
	{
		
		
		
		
		Response response = null;
		
		//User u = (User)JSONParser.fromJson(dataRecieved, User.class);

		try {
			
			boolean flag=false;
			String returnString=null;
			List<User> userList=userRepo.findByName(user.getName());
			System.out.println(userList);
			if(null!=userList && userList.size()>0){
				
				for(User u:userList){
					
					if(u.getPassword().equals(user.getPassword())){
						
						returnString = JSONParser.toJson(u);
						flag=true;
						break;
					}
					
					
				}
				
				
			}
			
			if(flag){
				response = Response.status(Status.OK)
						.entity(returnString).build();
			}
			
			
		
			
		} catch (Exception e) {
		
			Message message=new Message();
            message.setMessage(AppConfig.PROPERTIES.getProperty(e.getMessage()));
        	
            String jsonString=JSONParser.toJson(message);
             response=Response.status(Status.SERVICE_UNAVAILABLE).entity(jsonString).build();
		}
	
		return response;
	}
	
	@GetMapping("/getUserName")
	@Consumes("application/json")
    public User getUserName() {
        System.out.println("inside getusername");
		String s="ashish";
		User user =new User();
		user.setName("Ashish");
		
		return user;
    }
	
}
