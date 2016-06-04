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

.directive('linkListView', function() {
  var directive = {};
  // directive.restrict = 'E';
  directive.template = "<a ng-Href={{link.base_url}}/api/links/{{link.code}}>{{link.title}}</a><br>"
  return directive;
});