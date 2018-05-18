


var application = angular.module("myApp", [ 'ngRoute', 'ngCookies' ]);

application.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateURL : '../../../pages/main.html',
	}).when('/calculateBMR', {
		redirectTo : 'calculateBMR.html',
		templateURL : "calculateBMR.html",
	}).when('/calculateMacros', {
		templateURL : 'home2.html'
	}).when('/buildDietPlan', {
		templateURL : 'home2.html'
	}).when('/getTips', {
		templateURL : 'home2.html'
	}).when('/buildWorkoutPlan', {
		templateURL : 'home2.html'
	}).when('/getConsultation', {
		templateURL : 'home2.html'
	}).otherwise({
		redirectTo : '/',
		templateUrl : '../../../pages/main.html',
	});
} ]);


application.controller("HomepageController", function($http, $scope) {});

application.controller("MacrosCalculatorController", function($http, $scope) {

	console.log('MacrosCalculatorController');
	console.log($scope.searchText);
	$scope.resultList=[];
	$scope.serving=100;
	$scope.searchText = '';
	
	
	$scope.getSearchResult=function(){
		
		console.log($scope.searchText);
		$http.get('/rest/getSearchResult/'+$scope.searchText).then(
				function(response) {
					console.log('success');
					$scope.resultList=response.data;
					console.log($scope.resultList);
							
				}, function(response) {
					$scope.resultList=response.data;
				});
		
	}

	


});


application.controller("NewItemController", function($http, $scope) {

	console.log('NewItemController');
	
	console.log($scope.name)
	$scope.newItem=new Object();
	
	
	$scope.successmessage='';
	$scope.failuremessage='';
	
	
	$scope.saveItem=function(){
		
		console.log($scope.name);
		$scope.newItem.name=$scope.name;
		$scope.newItem.calories=$scope.calories;
		$scope.newItem.protein=$scope.protein;
		$scope.newItem.fat=$scope.fat;
		$scope.newItem.carbs=$scope.carbs;
		$scope.newItem.fiber=$scope.fiber;
		
		
		console.log($scope.newItem);
		$http.post('/rest/saveItem', $scope.newItem).then(
				function(response) {
					console.log('success');
					$scope.item=response.data;
					$scope.successmessage="Item saved successfully";
							
				}, function(response) {
					$scope.item=response.data;
					$scope.failuremessage="Item not saved successfully";
				});
		
		
	}
	


})