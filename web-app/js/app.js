// create module for custom directives
var angularFireApp = angular.module('angbootApp',['ui.bootstrap', 'firebase']).config(
	[ '$routeProvider', '$locationProvider','$httpProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			templateUrl : 'views/login.html'
		}).when('/main', {
			templateUrl : 'views/main.html',
			controller : 'AppCtrl'
		}).otherwise({
			redirectTo : '/login'
		});
	}
	]);
