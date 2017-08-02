// Add module and controller here.
var app = angular.module('myModule');

app.controller('loginCtrl', function($scope, loginService){

	$scope.checkLogin = function(){
		loginService.checkLogin()
	};
});
