'use strict';

/* Controllers */
angular.module('myApp.controllers', ['ui.bootstrap'])


    .controller('HomeCtrl', ['$scope',
    function($scope) {
        $scope.appTitle = "Generic Company";
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
     }])
    .controller('CarouselDemoCtrl', ['$scope',
        function($scope) {
            $scope.myInterval = 5000;
            var slides = $scope.slides = [];
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length;
                slides.push({
                    image: 'http://placekitten.com/' + newWidth + '/300',
                    text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
                });
            };
            for (var i=0; i<4; i++) {
                $scope.addSlide();
            }}])

    .controller('searchCtrl', ['$scope',
        function($scope) {
     }])

    .controller('MenuController',['$scope','$location',
    function ($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);


function TestCtrl($scope)
{

}