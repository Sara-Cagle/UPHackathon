controllers.controller('TotalController', ['$scope', 'DataFactory', 'CurrentUser', function($scope, DataFactory, CurrentUser){
   
    $scope.DataFactory = DataFactory;
    $scope.CurrentUser = CurrentUser;
    
    //displays buttons if a user has "logged in"
    $scope.userSelected = false;
    
    $scope.password = "";
    
    $scope.checkPassword = function(){
        if($scope.password===CurrentUser.user.password){
            $scope.userSelected = true;
        }
        else{
            document.getElementById("wrongPassword").innerHTML="You have typed the password incorrectly.";
        }
        //implement UP security here
    }
    
    $scope.logOut = function(){
        $scope.CurrentUser.user = CurrentUser.blankUser; //clear the user
        $scope.password = ""; //clear the password
        document.getElementById("wrongPassword").innerHTML=""; //clear errors
        $scope.userSelected = false; //close all the buttons
        
    }
    
    
}]);