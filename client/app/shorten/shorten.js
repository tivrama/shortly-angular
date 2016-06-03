angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = Links.addLink;
  $scope.link = {};

  // Links.addLink(function(resp){
  //   return resp;
  // });

});
