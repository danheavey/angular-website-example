'use strict';

/* Controllers */
angular.module('myApp.controllers', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.setNgAnimate'])


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
    .controller('CarouselDemoCtrl',['$scope', '$animate', function ($scope, $animate) {
        $scope.animate = false;
        $scope.animateGlobal = true;

        $scope.$watch('animateGlobal', function(val){
            console.log('Set Global animation Enabled: ' + val);
            $animate.enabled(val);
        });

        $scope.slides = [
            { image: 'http://lorempixel.com/400/200/', text: 'blah' },
            { image: 'http://lorempixel.com/400/200/', text: 'blah' },
            { image: 'http://lorempixel.com/400/200/', text: 'blah' },
        ];

    }])

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

function AccordionDemoCtrl($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };
}