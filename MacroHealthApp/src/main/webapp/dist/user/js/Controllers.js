


application.controller("SuggestionsController",function($cookies,$scope,$http){
	$scope.suggestedFunc=function(){
	$scope.message = null;
	$scope.item={};
	$scope.item.productId=$cookies.get("productId");
	$scope.item.name=$cookies.get("productName");
	$scope.item.sellingPrice=$cookies.get("sellingPrice");
	$scope.item.brand=$cookies.get("brand");
	$scope.item.discount=$cookies.get("discount");
	$scope.item.image=$cookies.get("image");
	$scope.item.specification=$cookies.get("specification");
	$scope.arr=$scope.item.specification.split(";");
	$scope.str1=$scope.arr[0].substring(10);
	$scope.str2=$scope.arr[1].substring(5);
	$scope.str3=$scope.arr[2].substring(5);
	$scope.item.quantity=$cookies.get("quantity");
	
	$http.get('/api/getOrderProducts/'+$scope.item.productId).then(function(response){
	$scope.suggestedClothes=response.data;
	},function(response){
		$scope.message = response.data.message;
		$scope.suggestedClothes=null;
		
	});
}
});



application.controller("ProductsController", function($scope,$window,$cookies,$http) {

	$scope.allProductList = null;
	$scope.sorting=null;
	$scope.sortBy=null;
	$scope.brand=[];
	$scope.type=[];
	$scope.priceRange=[];
	$scope.gender=[];
	$scope.discount=[];
	$scope.reverseValue=null;
	
	$scope.userName=$cookies.get("name");



	$scope.dynamicbrandlist=[];
	$scope.dynamictypelist=[];
	$scope.contact=function(){
		window.location="../../pages/Contact.html"
	}
	$scope.about=function(){
		window.location="../../About us.html"
	}

	$scope.fetchAllProduct = function(){
	
		
		$scope.message = null;
		$http.get('/api/allProductsList').then(function(response){
		console.log(response.data);
			$scope.allProductList=response.data;
			$scope.allClothes=$scope.allProductList;
			
			var x = 0;
			for (i in $scope.allProductList) {
				x = 0;
				for (j in $scope.dynamicbrandlist) {
					if ($scope.allProductList[i].brand == $scope.dynamicbrandlist[j]) {
						x = 1;
						break;
					}
				}
				if (x == 0) {
					$scope.dynamicbrandlist.push($scope.allProductList[i].brand)
				}
			}
			
			var y = 0;
			for (i in $scope.allProductList) {
				y = 0;
				
				var array=$scope.allProductList[i].specification.split(";");
				var string=array[1].substring(5);
				for (j in $scope.dynamictypelist) {
					
					
					if (string == $scope.dynamictypelist[j]) {
						y = 1;
						break;
					}
				}
				if (y == 0) {
					
					$scope.dynamictypelist.push(string);
					
				}
			}
			
			
			$scope.message = null;
		},
		function(response){
			$scope.message = response.data;
			$scope.allProductList=null;
		});
		
		
	}
	
	$scope.filterAll= function(){
		
		
	$scope.filteredClothes=[];
	$scope.message = null;
	var flag = 1;
	for ( var i in $scope.brand)
	{
		for ( var j in $scope.allClothes)
		{
			if ($scope.allClothes[j].brand == $scope.brand[i])
			{
				$scope.filteredClothes.push($scope.allClothes[j])
			}
		}
		if (flag == 1 && $scope.brand[i] == false)
		{
			flag = 1;
		} 
		else
		{
			flag = 0;
		}

	}
	if (flag == 1)
	{
		
		 $scope.allProductList=$scope.allClothes;
	}
	else if($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting your requirements"
		$scope.allProductList=[];
			
	}
	else
	{
		$scope.allProductList= $scope.filteredClothes;
	}
	
	
	
	
	//price filter
	$scope.filteredClothes=[];
	var flag = 1;
	
	
	for ( var i in $scope.priceRange) {
	
		for ( var j in $scope.allProductList) {
			min = 0;
			max = 0;
			if ($scope.priceRange[i] == "low") {
				min = 0;
				max = 499;
			} else if ($scope.priceRange[i] == "med") {
				min = 500;
				max = 1999;
			} else if ($scope.priceRange[i] == "high") {
				min = 2000;
				max = 10000;
			}
			
			if ($scope.allProductList[j].sellingPrice >= min
					&& $scope.allProductList[j].sellingPrice <= max) {
				
				$scope.filteredClothes
						.push($scope.allProductList[j])
			}
		}
		
		if (flag == 1 && $scope.priceRange[i] == false)
		{
			flag = 1;
		} 
		else 
		{
			flag = 0;
		}
	}
	
	if (flag == 1 && $scope.message == null)
	{	
		$scope.allProductList = $scope.allProductList;
	}
	else if ($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting all your requirements"
		$scope.allProductList = [];
	}
	else
	{
		$scope.allProductList = $scope.filteredClothes;
	}
	
	//gender filter
	$scope.filteredClothes=[];
	var flag = 1;
	
	
	for ( var i in $scope.gender)
	{ 
		for ( var j in $scope.allProductList)
		{
			var array1=$scope.allProductList[j].specification.split(";");
			var string1=array1[0].substring(10);
			
			if(string1==$scope.gender[i]){
				$scope.filteredClothes.push($scope.allProductList[j])
				
			}
		}
		
		if (flag == 1 && $scope.gender[i] == false)
		{
			flag = 1;
		} 
		else 
		{
			flag = 0;
		}
	}
	
	if (flag == 1 && $scope.message == null)
	{
		$scope.allProductList = $scope.allProductList;
	}
	else if ($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting all your requirements"
		$scope.allProductList = []
	}
	else
	{
		$scope.allProductList = $scope.filteredClothes;
	}
	
	//typefilter

	$scope.filteredClothes=[];
	var flag = 1;
	
	
	for ( var i in $scope.type)
	{ 
		for ( var j in $scope.allProductList)
		{
			var array=$scope.allProductList[j].specification.split(";");
			var string=array[1].substring(5);
			
			if(string==$scope.type[i]){
				$scope.filteredClothes.push($scope.allProductList[j])
				
			}
		}
		if (flag == 1 && $scope.type[i] == false)
		{
			flag = 1;
		} 
		else 
		{
			flag = 0;
		}
	}
	if (flag == 1 && $scope.message == null)
	{
		$scope.allProductList = $scope.allProductList;
	}
	else if ($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting all your requirements"
		$scope.allProductList = []
	}
	else
	{
		$scope.allProductList = $scope.filteredClothes;
	}
	
	//sizefilter
	$scope.filteredClothes=[];
	var flag = 1;
	
	
	for ( var i in $scope.size)
	{ 
		for ( var j in $scope.allProductList)
		{
			var array=$scope.allProductList[j].specification.split(";");
			var string=array[2].substring(5);
			
			if(string==$scope.size[i]){
				$scope.filteredClothes.push($scope.allProductList[j])
				
			}
		}
		
		if (flag == 1 && $scope.size[i] == false)
		{
			flag = 1;
		} 
		else 
		{
			flag = 0;
		}
	}
	
	if (flag == 1 && $scope.message == null)
	{
		$scope.allProductList = $scope.allProductList;
	}
	else if ($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting all your requirements"
		$scope.allProductList = []
	}
	else
	{
		$scope.allProductList = $scope.filteredClothes;
	}
	
	//discount filter
	$scope.filteredClothes = [];
	var flag = 1;
	for ( var i in $scope.discount)
	{
		for ( var j in $scope.allProductList)
		{
			min = 0;
			max = 0;
			if ($scope.discount[i] == "<5")
			{
				min = 1;
				max = 5;
			}
			else if ($scope.discount[i] == "5-10")
			{
				min = 5;
				max = 10;
			} 
			else if ($scope.discount[i] == "10-20")
			{
				min = 10;
				max = 20;
			} 
			if ($scope.allProductList[j].discount >= min && $scope.allProductList[j].discount < max)
			{
				$scope.filteredClothes.push($scope.allProductList[j])
			}
		}
		if (flag == 1 && $scope.discount[i] == false)
		{
			flag = 1;
		} 
		else 
		{
			flag = 0;
		}
	}
	if (flag == 1 && $scope.message == null)
	{
		$scope.allProductList = $scope.allProductList;
	}
	else if ($scope.filteredClothes.length == 0 && flag == 0)
	{
		$scope.message = "No clothes available meeting all your requirements"
		$scope.allProductList = []
	}
	else
	{
		$scope.allProductList = $scope.filteredClothes;
	}
	}
	
	
$scope.suggestionsFunction=function(selected){
	$cookies.put("productId" , selected.productId);
	$cookies.put("productName",selected.name);
	$cookies.put("sellingPrice",selected.sellingPrice);
	$cookies.put("brand",selected.brand);
	$cookies.put("discount",selected.discount);
	$cookies.put("image",selected.image);
	$cookies.put("specification",selected.specification);
	$cookies.put("quantity",selected.quantity);
	window.location = "../../pages/suggestions.html";
}
	

	
	
	$scope.brandFilter=function(){
		var flag=0;
		for(var i in $scope.brand){
			if($scope.brand[i]!=false && $scope.brand[i]!=null){
				$scope.clearBrand=true;
				flag=1;
			}
			if(flag==0)
				$scope.clearBrand=false;
				
		}
		
	}
	$scope.clearBrandFilter=function(){
		for(var i in $scope.brand){
			$scope.brand[i]=false;
		}
		$scope.clearBrand=false;
	}
	$scope.priceFilter=function(){
		var flag=0;
		for(var i in $scope.priceRange){
			if($scope.priceRange[i]!=false && $scope.priceRange[i]!=null){
				$scope.clearPrice=true;
				flag=1;
			}
			if(flag==0)
				$scope.clearPrice=false;
				
		}
	}
	$scope.clearPriceFilter=function(){
		for(var i in $scope.priceRange){
			$scope.priceRange[i]=false;
		}
		$scope.clearPrice=false;
	}
	
	$scope.genderFilter=function(){
		
		var flag=0;
		for(var i in $scope.gender){
			if($scope.gender[i]!=false && $scope.gender[i]!=null){
				
				$scope.clearGender=true;
				flag=1;
			}
			if(flag==0)
				$scope.clearGender=false;
			
				
		}
		
	}
	$scope.clearGenderFilter=function(){
		for(var i in $scope.gender){
			$scope.gender[i]=false;
		}
		$scope.clearGender=false;
	}
	
	$scope.discountFilter=function(){
		var flag=0;
		for(var i in $scope.discount){
			if($scope.discount[i]!=false && $scope.discount[i]!=null){
				$scope.clearDiscount=true;
				flag=1;
			}
			if(flag==0)
				$scope.clearDiscount=false;
				
		}
	}
	$scope.clearDiscountFilter=function(){
		for(var i in $scope.discount){
			$scope.discount[i]=false;
		}
		$scope.clearDiscount=false;
	}
	
	$scope.typeFilter=function(){
		var flag=0;
		for(var i in $scope.type){
			if($scope.type[i]!=false && $scope.type[i]!=null){
				$scope.cleartype=true;
				flag=1;
			}
			if(flag==0)
				$scope.cleartype=false;
				
		}
		
	}
	$scope.clearTypeFilter=function(){
		for(var i in $scope.type){
			$scope.type[i]=false;
		}
		$scope.cleartype=false;
	
	
	}
	$scope.sizeFilter=function(){
		var flag=0;
		for(var i in $scope.size){
			if($scope.size[i]!=false && $scope.size[i]!=null){
				$scope.clearsize=true;
				flag=1;
			}
			if(flag==0)
				$scope.clearsize=false;
				
		}
		
	}
	$scope.clearSizeFilter=function(){
		for(var i in $scope.size){
			$scope.size[i]=false;
		}
		$scope.clearsize=false;
	
	
	}
	
	
});














