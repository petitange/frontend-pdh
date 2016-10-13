(function () {
    'use strict';
    angular
        .module('app')
        .factory('trackService', ['$http', 'api', trackService]);

    function trackService($http, api) {
        var services;

        services = {
            getTopTracks: getTopTracks
        };

        return services;

        function success(response) {
            return response;
        }

        function fail(error) {
            return error;
        }

        function getTopTracks() {
            return $http({
                method: 'GET',
                url: api.url + '/2.0/?method=chart.gettoptracks&api_key=' + api.key + '&format=json'
            })
                .success(success)
                .error(fail);
        }
    }
})();
