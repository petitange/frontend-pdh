(function () {
    'use strict';
    angular
        .module('app')
        .factory('componentService', ['$http', componentService]);

    function componentService($http) {
        var services;

        services = {
            getComponents: getComponents
        };

        return services;

        function success(response) {
            return response;
        }

        function fail(error) {
            return error;
        }

        function getComponents() {
            return $http({
                method: 'GET',
                url: '/web-project-template-test/front/build/data/components.json'
            })
                .success(success)
                .error(fail);
        }
    }
})();
