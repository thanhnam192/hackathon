var app = angular.module('myApp',['ngRoute']);
app.config (function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : "main.html",
        controller : 'mainController'
    }).when('/addNote',{
        templateUrl : "addNote.html",
        controller : 'addNoteController'
    }).when('/editNote/:id',{
        templateUrl : "editNote.html",
        controller : 'editNoteController'
    });
});

app.controller('mainController',function($scope,dataService){
   $scope.list = dataService.list;
 
});

app.controller('addNoteController',function($scope,$location, dataService){
    $scope.colors = dataService.colors;
    
    $scope.addNote = function(){
       
        dataService.list.push(
                {
                    title : $scope.title,
                    des : $scope.des,
                    color : $scope.color
                });
        
        $location.path('/');
    }
})

app.controller('editNoteController',function($scope,$location,$routeParams,dataService){
    $scope.colors = dataService.colors;
    $scope.id = $routeParams.id;
    $scope.selectedItem = dataService.list[$scope.id];
    
    $scope.editNote = function(){
        dataService.list[$scope.id] = $scope.selectedItem;
        $location.path('/');
    }
 
})


app.service('dataService',function(){
    this.list = [
        {
            title : "Nam Nguyen",
            des : "testting 1",
            color : "red"
        },
         {
            title : "Hieu Lam",
            des : "testting 2",
            color : "Yellow"
        }
    ];
    
    this.colors = ['red','green','blue','yellow'];
})