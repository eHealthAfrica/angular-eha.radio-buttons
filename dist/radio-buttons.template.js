angular.module('eha.radio-buttons.template', ['templates/radio-buttons.template.tpl.html']);

angular.module("templates/radio-buttons.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/radio-buttons.template.tpl.html",
    "<div class=\"eha-radio-buttons\">\n" +
    "  <button\n" +
    "    class=\"btn yes\"\n" +
    "    ng-model=\"model\"\n" +
    "    ng-class=\"model === 'Y' && 'active'\"\n" +
    "    btn-radio=\"'Y'\"\n" +
    "  >\n" +
    "    <span\n" +
    "      ng-class=\"model === 'Y' && 'fa fa-check-circle' || 'fa fa-circle-o'\"\n" +
    "      translate\n" +
    "    >Yes</span>\n" +
    "  </button>\n" +
    "  <button\n" +
    "    class=\"btn no\"\n" +
    "    ng-model=\"model\"\n" +
    "    ng-class=\"model === 'N' && 'active'\"\n" +
    "    btn-radio=\"'N'\"\n" +
    "  >\n" +
    "    <span\n" +
    "      ng-class=\"model === 'N' && 'fa fa-check-circle' || 'fa fa-circle-o'\"\n" +
    "      translate\n" +
    "    >No</span>\n" +
    "  </button>\n" +
    "</div>\n" +
    "");
}]);

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
