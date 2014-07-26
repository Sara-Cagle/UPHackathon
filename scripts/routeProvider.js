
/**
 * Angular's special way of allowing single-page apps to act as a full website.
 * By providing these "routes" based off of our own index.html page,
 * we are able to load different templates on different button links
 * as if we were shuffling between actual full, HTML files.
 * This also allows the use of the forward/back button within our app.
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
      	}).
      	when('/alarm', {
			templateUrl: 'views/alarm.html',
			controller: 'AlarmController'
      	}).
      	when('/calc', {
			templateUrl: 'views/calc.html',
			controller: 'CalcController'
      	}).
      	otherwise({
			redirectTo: '/about'
      	});
}]);
