var myApp = angular.module('myApp',[])

myApp.controller('myController',function($scope){

  
});

myApp.directive('searchField', function(){
   return {
        templateUrl : "search-field.html",
         scope: {},
        controller : function($scope){
            $scope.getValue = function(){
                alert($scope.modelName)
            }
        }
   } 
});