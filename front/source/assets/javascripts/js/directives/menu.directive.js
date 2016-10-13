(function () {
    'use strict';
    angular
        .module('app')
        .directive('menu', menu);

    function menu() {
        var directive = {
            restricts: 'E',
            templateUrl: 'views/menu.html',
            controller: 'menuCtrl',
            controllerAs: 'vm'
        };

        return directive;
    }
})();
