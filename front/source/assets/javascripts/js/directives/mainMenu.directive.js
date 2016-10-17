(function () {
    'use strict';
    angular
        .module('app')
        .directive('mainMenu', mainMenu);

    function mainMenu() {
        var directive = {
            restricts: 'E',
            templateUrl: 'views/mainMenu.html',
            controller: 'mainMenuCtrl',
            controllerAs: 'vm'
        };

        return directive;
    }
})();
