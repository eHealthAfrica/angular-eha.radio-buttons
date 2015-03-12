;(function() {
  'use strict';

  var ngModule = angular.module('eha.radio-buttons', [
    'eha.radio-buttons.directive'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();

;(function() {
  'use strict';
  /**
   * @ngdoc directive
   * @name ehaRadioButtons
   * @module eha.radio-buttons
   */
  var ngModule = angular.module('eha.radio-buttons.directive', [
    'ui.bootstrap.buttons'
  ]);

  ngModule.directive('ehaRadioButtons', function() {
    return {
      restrict: 'EA',
      scope: {
        model: '='
      },
      templateUrl: function(element, attrs) {
        return attrs.templateUrl || 'templates/radio-buttons.template.tpl.html';
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
