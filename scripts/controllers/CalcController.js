controllers.controller('CalcController', ['$scope', 'DataFactory', 'CurrentUser', 'Time', function($scope, DataFactory, CurrentUser, Time){
  
  $scope.DataFactory = DataFactory;

  $scope.CurrentUser = CurrentUser;
  
  $scope.Time = Time;

  $scope.toggleCalc = false;
  //fatigue score
  $scope.risk = null;
  
  $scope.hour24;

  $scope.showFatigueFactor = false;

  //subtracting your start time from your end time in hours
  var workHours = (CurrentUser.orderedSchedule[0].end.getTime()-CurrentUser.orderedSchedule[0].start.getTime())/(1000*60*10);
  
  //adding the prev24 hours with the most recent 24hrs
  var hour48 = CurrentUser.user.last24+$scope.hour24;
  
  $scope.hoursInADay = new Array(25); //(0 to 24) to select for the last 24hrs

  
  /**
   * x: hours of sleep in the past 24 hours
   * y: hours of sleep in the past 48 hours
   * z: hours awake prior to working
  */
  $scope.calcRisk = function(){ 
    var x = parseInt($scope.hour24);
    var y = parseInt(hour48);
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
	  $scope.showFatigueFactor= true;
  };
  
}]);
