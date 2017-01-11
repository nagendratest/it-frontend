'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','$http','$location','$localStorage',function( $scope,$http,$location,$localStorage) {

    $scope.myFunc = function () {
        $scope.myTxt = "You clicked submit!";
        var url = "http://localhost:1337"


        $http
            .post(url + '/auth/local', $scope.credentials, {withCredentials: false})
            .then(
                function(response) {
                    console.log('You have been logged in.');
                    console.log(response.data);
                    $localStorage.user = response.data;
                    $localStorage.show = true;
                    console.log($localStorage.user);
                    $location.path("/view2");

                }
            )


      /*  $scope.user={username:"testignuser",email:"testinguser@gmail.com",admin:false};

        $http
            .post(url+'/user/createUser/' , $scope.user)
            .then(
                function(response) {
                    console.log('data saved.');
                    console.log(response.data);
                  //  $location.path("/view2");

                    $localStorage.user = response.data;
                    console.log($localStorage.user)
                }
            )*/

    },
    $scope.mySingup = function () {
        $scope.myTxt = "You clicked register!";
        var url = "http://localhost:1337"



        $http
            .post(url + '/auth/local/register', $scope.credentials, {withCredentials: true})
            .then(
                function(response) {
                    console.log('You have been logged in.');
                    console.log(response.data);
                    $location.path("/view2");

                     $localStorage.user = response.data;
                     console.log($localStorage.user)
                }
            )





    },
        $scope.myFacebookSingUp = function () {
            $scope.myTxt = "You clicked register!";
            var url = "http://localhost:1337"

            var landingUrl = url+ "/auth/facebook";
            $http
                .post(landingUrl)
                .then(
                    function(response) {
                        console.log('You have been logged in.');
                        console.log(response.data);
                        $location.path("/view2");

                        // $localStorage.credentials = response.data;
                    }
                )


        }

}]);