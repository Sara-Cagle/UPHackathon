controllers.controller('UserController', ['$scope', 'CurrentUser', 'Time', function($scope, CurrentUser, Time){
    $scope.CurrentUser = CurrentUser;
    $scope.Time = Time;
    
    $scope.schedule = "";
    
    
    //sets the users messages (updates it)
    $scope.setMessages = function(){
        $scope.messages = $scope.CurrentUser.user.messages;
        console.log("message: "+$scope.messages);
            
    }
    
    
   
    
    /**
     * Removes expired shifts
     * 
    */
    $scope.getShifts = function(){ 
        $scope.setMessages();
        $scope.schedule = $scope.CurrentUser.user.shifts; //array of objects
        //all expired shift things happen in the CurrentUser in factories.js

    };

    
}]);