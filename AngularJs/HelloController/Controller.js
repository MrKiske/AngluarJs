var app= angular.module("MyFirstApp",[])
app.controller("FirstController", function($scope){
    $scope.name = "Mario";
    $scope.comentarios = [
        {
            comentario: "buen tutorial",
            username: "Mario"

        }
        ,
        {
            comentario: "mal tutorial",
            username: "Felix"
        }    
    ]
});