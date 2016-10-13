(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', [
            'componentService',
            'Notification',
            mainCtrl
        ]);

    function mainCtrl(componentService, Notification) {
        var vm = this;
        componentService.getComponents().then(function (response) {
          console.log(response);
            vm.components = response.data;
            console.log('vm.components', vm.components);
        }, function (error) {
            Notification.error(error.message);
        });
    }
})();
