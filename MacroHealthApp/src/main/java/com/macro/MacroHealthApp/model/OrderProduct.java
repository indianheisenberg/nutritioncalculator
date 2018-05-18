package com.macro.MacroHealthApp.model;

public class OrderProduct
{
	private Integer orderId;
	private Integer productId;
	private Integer quantity;
	
	public OrderProduct() {
		
	}
	public OrderProduct(Integer productId, Integer quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}
	
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
}
