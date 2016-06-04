angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.location = $location;
  $scope.addLink = function(link) {
    $scope.link.url = $scope.url;
    Links.addLink(link, function(data){
      console.log('data', data)
      $scope.link = data;
      $scope.aTag = '/api/links/#/' + $scope.link.code;
      console.log('aTag', $scope.aTag);
    });
  };
  $scope.link = {};
  //testing
  $scope.mkShortLink = function(url) {
    console.log(url);
  };


})

.directive('linkView', function() {
  var directive = {};
  // directive.restrict = 'E';
  directive.template = "<a ng-Href={{aTag}}>{{link.title}}</a>"
  return directive;
})

