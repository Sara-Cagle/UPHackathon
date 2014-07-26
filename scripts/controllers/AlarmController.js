controllers.controller('AlarmController', ['$scope', $timeout, function($scope){
  
  /**
   * The content of what goes on the page.
  */
  $scope.message = "This is the alarm";
  
  $scope.clock = "loading clock...";
  $scope.tickInterval = 1000 //ms

  var tick = function() {
      $scope.clock = Date.now() // get the current time
      $timeout(tick, $scope.tickInterval); // reset the timer
  }

  // Start the timer
  $timeout(tick, $scope.tickInterval);
  
}]);
