controllers.controller('TotalController', ['$scope', 'DataFactory', 'CurrentUser', function($scope, DataFactory, CurrentUser){
    $scope.userSelected = false;
     
    
    $scope.DataFactory = DataFactory;
    $scope.CurrentUser = CurrentUser;
}]);