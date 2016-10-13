(function () {
    'use strict';

    angular
        .module('app')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            'NotificationProvider',
            'hljsServiceProvider',
            config
        ]).run(function () {
            angular.element(document).ready(function () {
                angular.element(document.querySelector('.loader')).css('display', 'none');
            });
        }).constant(
        'api', {
            key: '1ea476011a970d4658b7ae3a85170d36',
            url: 'http://ws.audioscrobbler.com/'
        }
    );

    function config($stateProvider, $urlRouterProvider, NotificationProvider, hljsServiceProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        }).state('top-tracks', {
            url: '/top-tracks',
            template: '<top-tracks num-top="10"></top-tracks>'
        }).state('top-artists', {
            url: '/top-artists',
            template: '<top-artists num-top="10"></top-artists>'
        });

    }
})();
