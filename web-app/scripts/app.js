// create module for custom directives
var angularFireApp = angular.module('angularFireApp',['ui.bootstrap', 'firebase', 'fireBaseServices']).config(
	[ '$routeProvider', '$locationProvider','$httpProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			templateUrl : 'views/login.html'
		}).when('/main', {
			templateUrl : 'views/main.html',
			controller : 'AppCtrl'
		}).when('/chat', {
            templateUrl : 'views/chat.html',
            controller : 'ChatCtrl'
        }).otherwise({
			redirectTo : '/login'
		});
	}
	]);
