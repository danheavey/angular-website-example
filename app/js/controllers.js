'use strict';

/* Controllers */
angular.module('myApp.controllers', [])


    .controller('HomeCtrl', ['$scope',
    function($scope) {
        $scope.title = "Home";
        $scope.headerImage = "img/homepage.jpg";
    }])
    .controller('AboutUsCtrl', ['$scope',
    function($scope) {
        $scope.title = "About Us";
        $scope.headerImage = "img/default-page.jpg";
    }])
    .controller('ProductsCtrl', ['$scope',
     function($scope) {
        $scope.title = "Products";
        $scope.headerImage = "img/default-page.jpg";
     }])
    .controller('BrochureRequestCtrl', ['$scope',
     function($scope) {
        $scope.title = "Brochure Request";
         $scope.headerImage = "img/default-page.jpg";
     }])
    .controller('DownloadsCtrl', ['$scope',
     function($scope) {
         $scope.headerImage = "img/default-page.jpg";
         $scope.title = "Downloads";
     }])
    .controller('StockistCtrl', ['$scope',
    function($scope) {
        $scope.title = "Stockist";
        $scope.headerImage = "img/default-page.jpg";
     }]);



function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}