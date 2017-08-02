// Add module here.
var app = angular.module('myModule', ['ngRoute']);

// Routing goes here.

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		controller: 'login-ctrl',
		templateUrl: 'partials/login.html',
		css: 'css/styles.css'
	})
	.when('/profile', {
		controller: 'profile-ctrl',
		templateUrl: 'partials/profile.html'
	})
	.otherwise({redirectTo: '/login'})
});
