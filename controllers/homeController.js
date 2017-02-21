app.controller('homeController',['$scope','$state','dataService',function($scope,$state,dataService){
  $scope.menu = {
      southIndian: [{
        name: 'Idly',
        price: 40
      },{
        name: 'Vada',
        price: 50
      },{
        name: 'Plain Dosa',
        price: 50
      },{
        name: 'Masala Dosa',
        price: 80
      },{
        name: 'Paneer Dosa',
        price: 90
      },{
        name: 'Onion Uttapam',
        price: 80
      }],
      northIndian: [{
        name: 'Samosa',
        price: 20
      },{
        name: 'Poori Aloo Dum',
        price: 40
      },{
        name: 'Aloo Parotha',
        price: 50
      },{
        name: 'Masala Parotha',
        price: 80
      },{
        name: 'Chana Kulcha',
        price: 80
      },{
        name: 'Chola Batura',
        price: 100
      }]
  }
  $scope.order={};
  $scope.totalPrice=0;
  $scope.totalItems=0;

  $scope.dishOrdered = function(dish){
    console.log('hi');
    var dishInOrder = $scope.order[dish.name];
    if(dishInOrder){
      dishInOrder.count+=1;
      dishInOrder.amount+=dish.price;
    }
    else {
      $scope.order[dish.name] = {count:1,amount:dish.price}
      };
    $scope.totalPrice+=dish.price;
    $scope.totalItems+=1;
  }

  $scope.dishRemoved = function(dish){
    console.log('bye');

    var dishInOrder = $scope.order[dish.name];
    if(dishInOrder && dishInOrder.count>0){
      dishInOrder.count-=1;
      dishInOrder.amount-=dish.price;
      $scope.totalPrice-=dish.price;
      $scope.totalItems-=1;
      if(dishInOrder.count === 0){
        delete $scope.order[dish.name]
      }
    }
  }

  $scope.isDisabled = function(dish){
    var dishInOrder = $scope.order[dish.name];
    if(dishInOrder){
      if(dishInOrder.count > 0)
        return false;
    }
    return true;
  }

  $scope.onCheckout = function(){
    if($scope.totalItems){
      dataService.setData($scope.order,$scope.totalItems,$scope.totalPrice);
      $state.go('checkout');
    }
  }

}])
