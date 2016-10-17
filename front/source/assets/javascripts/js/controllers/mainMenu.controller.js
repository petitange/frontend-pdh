(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainMenuCtrl', [
            'componentService',
            'Notification',
            mainMenuCtrl
        ]);

    function mainMenuCtrl(componentService, Notification) {
        var vm = this;
        componentService.getComponents().then(function (response) {
            vm.components = response.data;
        }, function (error) {
            Notification.error(error.message);
        });
    }
})();
