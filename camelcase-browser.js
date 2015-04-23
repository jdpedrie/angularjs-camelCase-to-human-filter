(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"decamelize":2}],2:[function(require,module,exports){
'use strict';
module.exports = function (str, sep) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(/([a-z\d])([A-Z])/g, '$1' + (sep || '_') + '$2').toLowerCase();
};

},{}]},{},[1]);
