(function () {
    'use strict';
    angular
        .module('app')
        .directive('sideNav', sideNav);

    function sideNav() {
        var directive = {
            restricts: 'E',
            templateUrl: 'views/sideNav.html',
            scope: {
                components: '='
            }
        };

        return directive;
    }
})();
