app.controller('thanksController',['$scope','dataService','$state',function($scope,dataService,$state){
  $scope.address = dataService.getAddress();
  $scope.totalPrice = dataService.getData().totalPrice;
  $scope.orderId = Math.random().toString(36).slice(2);
  $scope.goBackHome = function(){
    $state.go('home');
  }
}])
