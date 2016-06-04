angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  
  //Links.getLinks();
  // // $scope.data = {};

  $scope.getLinks = Links.getLinks;
  $scope.data = {};
  Links.getLinks(function(result){
    $scope.data.links = result;
  });


})

