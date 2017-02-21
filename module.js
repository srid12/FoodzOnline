var app = angular.module('fooddelivery',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('home',{
    url: '/home',
    templateUrl: './templates/home.html'
  })
  .state('checkout',{
    url: '/checkout',
    templateUrl: './templates/checkout.html'
  })
  .state('thanks',{
    url: '/thanks',
    templateUrl: './templates/thanks.html'
  });
  $urlRouterProvider.otherwise('/home');

}])
