package com.macro.MacroHealthApp.model;



public class Item {

	
	private String name;
	private String calories;
	
	private String protein;
	private String fat;
	private String carbs;
	private String fiber;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCalories() {
		return calories;
	}
	public void setCalories(String calories) {
		this.calories = calories;
	}
	public String getProtein() {
		return protein;
	}
	public void setProtein(String protein) {
		this.protein = protein;
	}
	public String getFat() {
		return fat;
	}
	public void setFat(String fat) {
		this.fat = fat;
	}
	public String getCarbs() {
		return carbs;
	}
	
	public void setCarbs(String carbs) {
		this.carbs = carbs;
	}
	public String getFiber() {
		return fiber;
	}
	public void setFiber(String fiber) {
		this.fiber = fiber;
	}
	
	@Override
	public String toString() {
		return "Item [name=" + name + ", calories=" + calories + ", protein=" + protein + ", fat=" + fat + ", carbs="
				+ carbs + ", fiber=" + fiber + "]";
	}
	
	
}