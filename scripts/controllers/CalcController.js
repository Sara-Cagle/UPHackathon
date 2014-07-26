controllers.controller('CalcController', ['$scope', function($scope){
  
  /**
   * The content of what goes on the page.
  */
  $scope.message = 'Here is calculator';
  
  //fatigue score
  $scope.risk = null;
  
  $scope.hour24 = 0; //sleep in just past 24
  $scope.hour48 = 0; //total sleep in past 48
  $scope.workHours = 0; //your total hours of work
  
  $scope.hoursInADay = new Array(25);
  
  /**
   * x: hours of sleep in the past 24 hours
   * y: hours of sleep in the past 48 hours
   * z: hours awake prior to working
  */
  $scope.calcRisk = function(){ 
    var x = parseInt($scope.hour24);
    var y = parseInt($scope.hour48);
    var z = parseInt($scope.workHours);
	  $scope.risk = 0;
	  if (x < 5){
	    alert("inside the x loop");
		  $scope.risk += 2 * Math.ceil(5 - x);
	  }
	  if (y < 12){
	    alert("inside the y loop");
		  $scope.risk += 2 * Math.ceil(12 - y);
	  }
	  if (z > y){
	    alert("inside the z loop");
	    $scope.risk += (z - y);
	  }
  };
  
}]);
