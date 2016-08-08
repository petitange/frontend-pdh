(function () {
  'use strict';

  angular
  .module('app')
  .config(['contentfulProvider', config]);

  function config(contentfulProvider) {
    contentfulProvider.setOptions({
      space: 'g35l4h9ro1ex',
      accessToken: '8292c976ca68e89ba410e9ae7478da0aa10524732626266b79873a2be82f3268'
    });
  }
})();
