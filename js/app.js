var app = angular.module('myApp',['ngRoute']);
app.config (function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : "main.html"
    }).when('/addNote',{
        templateUrl : "addNote.html"
    }).when('/editNote',{
        templateUrl : "editNote.html"
    });
});

app.controller('mainController',function($scope,dataService){
   $scope.list = dataService.list;
    $scope.editNote = function(note){
        dataService.selectedNote = note;


    }
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

app.controller('editNoteController',function($scope,dataService){
    $scope.colors = dataService.colors;
    $scope.selectedItem = dataService.selectedNote;
    $scope.editNote = function(){
        //Don't run anything because it auto map with item in list
        //dataService.list[$scope.id] = $scope.selectedItem;
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