
var logmodule = angular.module("loginModule", [ 'ngCookies' ]);



logmodule.config(function($httpProvider) {
                     $httpProvider.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
                     $httpProvider.defaults.headers.post['Data-Type'] = "json";
              });



logmodule.controller("LoginController", function($scope,$http,$cookies) {
	$scope.loginForm=new Object();

    $scope.loginForm.message = null;
    
    $http.get('/loginApi/getUserName').then(function(response){
		$scope.username=response.data;
		console.log($scope.username);
	},function(response){
		
		console.log('failure');
	})
    
	$scope.submitLogin=function(){
		$http.post('/loginApi/login', $scope.loginForm).then(function(response){
			 
			$cookies.put("name", response.data.userName);
			if(response.data.message==null){
				window.location = "../../pages/home.html";
			}
			else{
				$scope.loginForm.message = response.data.message;
			}
				},function(response){
			
					$scope.loginForm.message = response.data.message;
				})	 
       
	}
})
