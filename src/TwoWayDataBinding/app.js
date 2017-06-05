var myApp = angular.module('myApp',[])

myApp.controller('myController',function($scope){
    $scope.list = [];
    $scope.add = function(){
        var newItem = {
            name : $scope.name,
            time : new Date()
        }
        
        $scope.list.push(newItem);
    }
})