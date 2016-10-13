(function () {
    'use strict';

    angular
        .module('app')
        .controller('topTracksCtrl', [
            '$scope',
            'trackService',
            'Notification',
            topTracksCtrl
        ]);

    function topTracksCtrl($scope, trackService, Notification) {
        var vm = this;
        vm.numTop = $scope.numTop || 50;
        trackService.getTopTracks().then(function (response) {
            vm.tracks = response.data.tracks.track;
        }, function (error) {
            Notification.error(error.message);
        });
    }
})();
