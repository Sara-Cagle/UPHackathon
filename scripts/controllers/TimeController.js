controllers.controller('TimeController', ['$scope', 'DataFactory', function($scope, DataFactory){
    
    
    //total hours in 12, 0 to 11 (we will add +1 to get 1-12 on the view)
    $scope.hours12 = new Array(12);
    
    //total minutes in an hour, 0 to 59
    $scope.minutes60 = new Array(60);
    
    
    $scope.startHour = 1;
    $scope.startMin = 0;
    
}]);