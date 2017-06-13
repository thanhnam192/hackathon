var app = angular.module('myApp',['ngRoute']);
app.config (function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : "views/main.html"
    }).when('/addNote',{
        templateUrl : "views/addNote.html"
    }).when('/editNote',{
        templateUrl : "views/editNote.html"
    }).when('/editNote/:id',{
        templateUrl : "views/editNote.html"
    });
    ;
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
        
  
    }
})

app.controller('editNoteController',function($scope,dataService,$routeParams){
    $scope.colors = dataService.colors;
    $scope.selectedItem = dataService.selectedNote;
    if($scope.selectedItem==null){
        $scope.selectedItem = dataService.list[$routeParams.id]
        
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