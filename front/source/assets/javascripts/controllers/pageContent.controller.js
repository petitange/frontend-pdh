(function () {
  'use strict';

  angular
  .module('app')
  .controller('pageContentfulCtrl', ['contentful', pageContentfulCtrl]);

  function pageContentfulCtrl(contentful) {
    var vm = this;
    vm.fields = {};
    // Get all entries
    contentful
      .entries()
      .then(
        // Success handler
        function (response) {
          console.log(response.data);
          var entries = response.data;
          vm.fields = response.data.items[1].fields;
            console.log(vm.fields);
        },
        // Error handler
        function (response) {
          console.log('Oops, error ' + response.status);
        }
      );
  };
})();
