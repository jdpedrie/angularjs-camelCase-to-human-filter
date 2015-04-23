'use strict';

var decamelize = require('decamelize');

angular
  .module('camelCaseToHuman', [])

  // Convert a camelCase string to a human-readable one
  .filter('camelCaseToHuman', function() {
    return function(input, uppercaseFirst) {

      if (typeof input !== "string") {
        return input;
      }

      var result = decamelize(input, ' ');

      if (uppercaseFirst) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
      }

      return result;
    };
  });
