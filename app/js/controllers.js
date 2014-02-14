'use strict';

/* Controllers */
angular.module('myApp.controllers', [])


    .controller('HomeCtrl', ['$scope',
    function($scope) {
        $scope.title = "Home"
    }])
    .controller('AboutUsCtrl', ['$scope',
    function($scope) {
        $scope.title = "About Us"
    }])
    .controller('ProductsCtrl', ['$scope',
        function($scope) {
            $scope.title = "Products"
     }])
    .controller('BrochureRequestCtrl', ['$scope',
        function($scope) {
            $scope.title = "Brochure Request"
     }])
    .controller('DownloadsCtrl', ['$scope',
        function($scope) {
            $scope.title = "Downloads"
     }])
    .controller('StockistCtrl', ['$scope',
        function($scope) {
            $scope.title = "Stockist"
     }]);



function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}