controllers.controller('AlarmController', 
['$scope', '$interval', function($scope, $interval){
  
  
  $scope.format = 'M/d/yy h:mm:ss a';
  
  $scope.setAlarm = function(){
        var now = new Date();
        $scope.alarms = $scope.CurrentUser.user.alarms;
        //$scope.alarms.push(now);
        console.log($scope.CurrentUser.user.messages);//$scope.alarms);
        
    };
    
    
  $scope.hoursInADay = new Array(24); //(0 to 23) to select for the last 24hrs
  $scope.minsInAnHour = new Array(60); //0 to 59
  
  $scope.hourTime;
  $scope.minTime;




/***********************************************

* JavaScript Alarm Clock- by JavaScript Kit (www.javascriptkit.com)
* This notice must stay intact for usage
* Visit JavaScript Kit at http://www.javascriptkit.com/ for this script and 100s more

***********************************************/






}]).directive('myCurrentTime', ['$interval', 'dateFilter',
    function($interval, dateFilter) {
      // return the directive link function. (compile function not needed)
      return function(scope, element, attrs) {
        var format,  // date format
            stopTime; // so that we can cancel the time updates

        // used to update the UI
        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        // watch the expression, and update the UI on change.
        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          updateTime();
        });

        stopTime = $interval(updateTime, 1000);

        // listen on DOM destroy (removal) event, and cancel the next UI update
        // to prevent updating time after the DOM element was removed.
        element.on('$destroy', function() {
          $interval.cancel(stopTime);
        });
      };
    }]);
    
