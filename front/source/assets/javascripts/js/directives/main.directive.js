(function () {
    'use strict';
    angular
        .module('app')
        .directive('main', main);

    function main() {
        var directive = {
            restricts: 'E',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl',
            controllerAs: 'vm'
        };

        return directive;
    }
})();
