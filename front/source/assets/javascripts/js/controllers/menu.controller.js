(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuCtrl', [
            'componentService',
            'Notification',
            menuCtrl
        ]);

    function menuCtrl(componentService, Notification) {
        var vm = this;
        componentService.getComponents().then(function (response) {
            vm.components = response.data;
        }, function (error) {
            Notification.error(error.message);
        });
    }
})();
