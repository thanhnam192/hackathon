var app = angular.module("app",[]);
app.controller = app.controller("controller",function($scope){
    $scope.name =JSON.parse( window.localStorage.getItem("name")).name||"My name should be here";
    $scope.changeModel = function(){
       window.localStorage.setItem("name",JSON.stringify({name:$scope.name}));
  
        
    };
});