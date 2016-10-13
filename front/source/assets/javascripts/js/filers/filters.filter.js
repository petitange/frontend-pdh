(function () {
    'use strict';

    angular
        .module('app')
        .filter('trusted', [
            '$sce',
            trusted
        ]);

    function trusted($sce) {
      return function(html){
          return $sce.trustAsHtml(html)
      }
    }
})();
