controllers.controller('UserController', ['$scope', 'CurrentUser', 'Time', 'DataFactory', function($scope, CurrentUser, Time, DataFactory){
    $scope.CurrentUser = CurrentUser;
    $scope.DataFactory = DataFactory;
    $scope.Time = Time;
    $scope.to = "Taylor Isom";
    $scope.from = "Matthew Kocmoud";
    $scope.msg = "";
    $scope.userToMessage = null;
    $scope.alarms = "no alarms set";
    
    
    $scope.sendMessage = function(){
        //var data = $scope.DataFactory.length;
        var isValidAddress = false;
        //console.log("this is data: "+data);
        for (var userIndex in DataFactory){
            var user = DataFactory[userIndex];
            //console.log("is this null: "+user);
            if (user.name == $scope.to){
                isValidAddress = true;
                $scope.userToMessage = DataFactory[userIndex];
            }
        }
        //console.log($scope.userToMessage);
        if (isValidAddress){
            $scope.messages = $scope.userToMessage.messages;
            //console.log($scope.messages.length);
            var msg = { 'to' : $scope.to,
                        'from' : $scope.from,
                        'message': $scope.msg
                            
                        }
            $scope.messages.push(msg);
            //console.log($scope.messages.length);
        }
    };
    
    //sets the users messages (updates it)
    $scope.getMessages = function(){
        $scope.messages = $scope.CurrentUser.user.messages;
        console.log("message: "+$scope.messages);
            
    };
    
    //"alarms: "+
    
   
    
    /**
     * Sets the shifts as $scope.schedule
    */
    /*$scope.getShifts = function(){ 
        $scope.schedule = $scope.CurrentUser.user.shifts; //array of objects
        //all expired shift things happen in the CurrentUser in factories.js

    };*/

    
}]);