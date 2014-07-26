var app = angular.module('SleepScoreApp', [
	'ngRoute',
	'controllers'
]);

var controllers = angular.module('SleepScoreApp', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/someURL',{
			templateUrl: '#',
			controller: 'controllername'
		}).
		otherwise({
			redirectTo: '#'
		});
}]);
