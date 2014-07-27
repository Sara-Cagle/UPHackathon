controllers.controller('UserController', ['$scope', 'CurrentUser', 'Time', 'DataFactory', function($scope, CurrentUser, Time, DataFactory){
    $scope.CurrentUser = CurrentUser;
    $scope.DataFactory = DataFactory;
    $scope.Time = Time;
    $scope.to = "Taylor Isom";
    $scope.from = "";
    $scope.msg = "";
    $scope.userToMessage = null;
    
    
    $scope.sendMessage = function(){
        //$scope.DataFactory = $scope.DataFactory.length;
        var isValidAddress = false;
        //console.log(2);
        for (var userIndex in DataFactory){
            var user = DataFactory[userIndex];
            if (user.name == $scope.to){
                isValidAddress = true;
                $scope.userToMessage = DataFactory[userIndex];
            }
        }
        //console.log($scope.userToMessage);
        if (isValidAddress){
            $scope.messages = $scope.userToMessage.messages;
            //console.log(messages);
        }
    };
    
    //sets the users messages (updates it)
    $scope.getMessages = function(){
        $scope.messages = $scope.CurrentUser.user.messages;
        console.log("message: "+$scope.messages);
            
    };
    
    
   
    
    /**
     * Sets the shifts as $scope.schedule
    */
    /*$scope.getShifts = function(){ 
        $scope.schedule = $scope.CurrentUser.user.shifts; //array of objects
        //all expired shift things happen in the CurrentUser in factories.js

    };*/

    
}]);