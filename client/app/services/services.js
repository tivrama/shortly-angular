angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var service = {};

  service.getLinks = function (callback){
    return $http({
      method: 'GET',
      url: '/api/links',
    })
    .then(function (resp) {
      
      callback(resp);
    });
  };

  service.addLink = function(info, callback){
    return $http({
      method: 'POST',
      url: '/api/links',
      data: info
    })
    .then(function(resp){
      
      callback(resp.data);
    });
  };

  //validate urls
  service.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  service.isValidUrl = function(url) {
      return url.match(service.rValidUrl);
  };


  return service;

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});


//addLink new version
// service.addLink = function(info, callback){
//     return $http({
//       method: 'POST',
//       url: '/api/links',
//       data: info
//     })
//     .then(function(resp){
//       console.log('post resp', resp)
//       callback(resp.data);
//     }, function(resp){
//       console.log('catch resp', resp);
//     });
//   };
