'use strict';

// camelCase To Human Filter
// ---------------------
// Converts a camelCase string to a human readable string.
// i.e. myVariableName => My Variable Name


angular.module('camelCaseToHuman', []).filter('ordinal', function() {
  return function(input) {
    return input.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
  }
});