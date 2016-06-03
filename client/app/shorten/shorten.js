angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = Links.addLink;
  $scope.link = {url: $scope.url};
   $scope.mkShortLink = function(url) {
    console.log(url);
  };


});
