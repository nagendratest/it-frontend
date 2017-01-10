'use strict';

angular.module('myApp.view2', ['ngRoute','ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/UserForm.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$localStorage','$scope',function($localStorage,$scope) {
   $scope.user = $localStorage.user.user;
   debugger;
   console.log("ïnside view2 controller");
   console.log($localStorage.user.user);
   console.log($scope.user);

}]);