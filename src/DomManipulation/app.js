var myApp = angular.module('myApp',[])

myApp.controller('myController',function($scope){
   $scope.submit = function(){
       alert('Axon Active');
   }
   
   $scope.classes = [
       {
           name : "Text danger",
           className : "text-danger"
       },
       {
           name : "Text primary",
           className : "text-primary"
       },
       {
           name : "Text success",
           className : "text-success"
       }
   ];
})