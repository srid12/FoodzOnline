app.service('dataService',[function(){
  var data = { order: {},
                totalItems: 0,
                totalPrice: 0
              }
  var address = null;
  this.setData = function(order,totalItems,totalPrice){
    data.order = order;
    data.totalItems = totalItems;
    data.totalPrice = totalPrice;
  }

  this.getData = function(){
    return data;
  }

  this.setAddress = function(obj){
     address = obj;
  }

  this.getAddress = function(obj){
    return address;
  }
}])
