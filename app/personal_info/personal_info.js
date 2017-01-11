'use strict';

angular.module('myApp.personal_info', ['ngRoute','ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personal_info', {
    templateUrl: 'personal_info/personal_info.html',
    controller: 'personal_infoCtrl'
  });
}])

.controller('personal_infoCtrl', ['$localStorage','$scope',function($localStorage,$scope) {
    $scope.show = $localStorage.show;
   $scope.user = $localStorage.user.user;
   //debugger;
   console.log("ïnside personal_infoCtrl controller");
   console.log($localStorage.user.user);
   console.log($scope.user);

}]);