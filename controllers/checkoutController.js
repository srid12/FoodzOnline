app.controller('checkoutController',['$scope','dataService','$state',function($scope,dataService,$state){
  var data =dataService.getData();
  $scope.order = data.order;
  $scope.totalItems = data.totalItems;
  $scope.totalPrice = data.totalPrice;
  $scope.message="";
  $scope.onConfirmOrder = function(){
    var invalid  = $(".ng-invalid").length;
    if(invalid === 0 )
      {
        dataService.setAddress($scope.address);
        $state.go('thanks')
      }
      $scope.message="Invalid Inputs, Correct Them And Retry"
  }
}])
