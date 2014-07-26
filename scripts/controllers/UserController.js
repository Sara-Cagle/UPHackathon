controllers.controller('UserController', ['$scope', 'DataFactory', 'CurrentUser', 'Time', function($scope, DataFactory, CurrentUser, Time){
    $scope.DataFactory = DataFactory;
    $scope.CurrentUser = CurrentUser;
    $scope.Time = Time;
    
    $scope.schedule = "shawty need dem shifts doe";
    
    
    
    $scope.getShifts = function getShifts(){
        
        $scope.schedule = $scope.CurrentUser.user.shifts;
    };
}]);