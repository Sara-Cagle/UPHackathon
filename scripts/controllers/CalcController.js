controllers.controller('CalcController', ['$scope', 'DataFactory', 'CurrentUser', function($scope, DataFactory, CurrentUser){
  
  $scope.DataFactory = DataFactory;

  $scope.CurrentUser = CurrentUser;
  
  /**
   * The content of what goes on the page.
  */
  $scope.message = 'Here is calculator';
  
  //fatigue score
  $scope.risk = null;
  
  $scope.hour24; //sleep in just past 24
  $scope.hour48; //total sleep in past 48
  $scope.workHours; //your total hours of work
  
  $scope.startWork;
  $scope.endWork;
  
  var workHours = $scope.endWork - $scope.startWork;
  
  $scope.hoursInADay = new Array(25); //(0 to 24)
  
  /* We eventually want to have a way to store the PREVIOUS
  24 hours of sleep, so rather than ask for the last 48, we ask for current 24
  and then just add on to the previous 24
  */
  
  /**
   * x: hours of sleep in the past 24 hours
   * y: hours of sleep in the past 48 hours
   * z: hours awake prior to working
  */
  $scope.calcRisk = function(){ 
    var x = parseInt($scope.hour24);
    var y = parseInt($scope.hour48);
    var z = parseInt(workHours);
	  $scope.risk = 0;
	  if (x < 5){
		  $scope.risk += 2 * Math.ceil(5 - x);
	  }
	  if (y < 12){
		  $scope.risk += 2 * Math.ceil(12 - y);
	  }
	  if (z > y){
	    $scope.risk += (z - y);
	  }
  };
  
}]);
