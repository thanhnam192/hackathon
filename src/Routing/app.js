var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: 'main.html'})
        .when('/showOrders',{templateUrl : 'show-orders.html'})
        .when('/addOrder',{templateUrl : 'add-order.html'})
})

myApp.controller('myController',function($scope){

  
});

