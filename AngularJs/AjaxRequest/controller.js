angular.module("MyFirstApp",[])
    .controller("FirstController", function($scope, $http){
        $scope.posts=[];
        $http({
            method: 'GET',
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then(function(response){
            console.log(response);
            $scope.posts= response.data;
        }, function (err)
        {
            console.log(err);
            $scope.posts= data;
        });
    });