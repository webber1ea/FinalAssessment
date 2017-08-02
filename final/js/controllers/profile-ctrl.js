// Add module and controller here.
var app = angular.module('myModule');

app.controller('profileCtrl', function($scope, loginService){

	$scope.getProfile = function(){
		loginService.getProfile()
	};
});
