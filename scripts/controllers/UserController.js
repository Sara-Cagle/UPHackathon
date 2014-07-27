controllers.controller('UserController', ['$scope', 'CurrentUser', 'Time', function($scope, CurrentUser, Time){
    $scope.CurrentUser = CurrentUser;
    $scope.Time = Time;
    
    $scope.schedule = "";
    
    
    //set the current user (updates it)
    $scope.update = function(){
        $scope.messages = $scope.CurrentUser.user.messages;
        //console.log("message: "+$scope.messages);
            
    }
    
    
    /**
     * Remove expired dates
    */
    $scope.removeExpiredShifts = function(){
        $scope.schedule = $scope.CurrentUser.user.shifts; //array of objects
    }
    
    /**
     * Removes expired shifts
     * 
    */
    $scope.getShifts = function(){ 
        $scope.schedule = $scope.CurrentUser.user.shifts; //array of objects
        var now = new Date();
        for (var indexOfShift in $scope.schedule){ //checks each shift
            var start = $scope.schedule[indexOfShift].start; //date object
            if(start instanceof Date){
                if(parseInt(start.getTime())-(1000*60*90)-parseInt(now.getTime())<0){
                    //futureTime-90minute prep period - current time
                    $scope.CurrentUser.user.shifts.splice(indexOfShift,1); //removes the shift
                    $scope.schedule = $scope.CurrentUser.user.shifts; //updates schedule
                }
            }
            else{
                alert("start and end werent dates");
            }
        }
    };

    
}]);