package com.macro.MacroHealthApp.resources;


@SuppressWarnings("all")
public class JSONParser {
	public static String toJson(Object obj) throws Exception {
		return new com.macro.MacroHealthApp.resources.JSONParser().toJson(obj);
	}
	
	public static <T> T fromJson(String jsonInput, Class<T> classOfInputData)
			throws Exception {
		return new com.macro.MacroHealthApp.resources.JSONParser().fromJson(jsonInput, classOfInputData);
	}
}
