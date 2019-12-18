angular.module("MyFirstApp",[])
    .controller("FirstController", function($scope, $http){
        $scope.posts=[];
        $scope.addPost = function(){
            $http({
                method: "POST",
                url: "https://jsonplaceholder.typicode.com/posts",
                data: 
                {
                   title: $scope.newPost.title,     
                   body: $scope.newPost.body,
                   userId: 1
                }    
            }).then(function successCallback(response){
                $scope.posts.push(response.data);
            }, function errorCallback(response){
                $scope.error= "error";
            })
        }
    });