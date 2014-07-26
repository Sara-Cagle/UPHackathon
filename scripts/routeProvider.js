app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/about',{
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		}).
		when('/alarm',{
			templateUrl: 'views/alarm.html',
			controller: 'AlarmController'
		}).
		when('/calc',{
			templateUrl: 'views/calc.html',
			controller: 'CalcController'
		}).
		otherwise({
			redirectTo: '/about'
		});
}]);
