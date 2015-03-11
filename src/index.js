;(function() {
  'use strict';

  var ngModule = angular.module('eha.radio-buttons', [
    'eha.radio-buttons.directive',
    'eha.radio-buttons.template'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
