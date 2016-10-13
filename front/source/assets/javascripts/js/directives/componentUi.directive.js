(function () {
    'use strict';
    angular
        .module('app')
        .directive('componentUi', componentUi);

    function componentUi() {
        var directive = {
            restricts: 'E',
            templateUrl: 'views/componentUi.html',
            scope: {
                component: '='
            }
        };

        return directive;
    }
})();
