package com.macro.MacroHealthApp.model;



public class Item {

	
	private String name;
	private Double calories;
	
	private Double protein;
	private Double fat;
	private Double carbs;
	private Double fiber;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getCalories() {
		return calories;
	}
	public void setCalories(Double calories) {
		this.calories = calories;
	}
	public Double getProtein() {
		return protein;
	}
	public void setProtein(Double protein) {
		this.protein = protein;
	}
	public Double getFat() {
		return fat;
	}
	public void setFat(Double fat) {
		this.fat = fat;
	}
	public Double getCarbs() {
		return carbs;
	}
	
	public void setCarbs(Double carbs) {
		this.carbs = carbs;
	}
	public Double getFiber() {
		return fiber;
	}
	public void setFiber(Double fiber) {
		this.fiber = fiber;
	}
	
	@Override
	public String toString() {
		return "Item [name=" + name + ", calories=" + calories + ", protein=" + protein + ", fat=" + fat + ", carbs="
				+ carbs + ", fiber=" + fiber + "]";
	}
	
	
}