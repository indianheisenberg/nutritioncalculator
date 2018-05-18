package com.macro.MacroHealthApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//@SpringBootApplication
@Configuration
@ComponentScan
@EnableAutoConfiguration(exclude={JmxAutoConfiguration.class})
public class MacroHealthAppApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(MacroHealthAppApplication.class, args); 
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return application.sources(applicationClass);
		
		
	}
	private static Class<MacroHealthAppApplication> applicationClass=MacroHealthAppApplication.class;
}
