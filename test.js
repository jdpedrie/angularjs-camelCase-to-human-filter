'use strict';

var assert = chai.assert;

describe('camelCaseToHuman', function() {
  var camelCaseFilter;

  beforeEach(function() {
    module('camelCaseToHuman');

    inject(function($injector) {
      camelCaseFilter = $injector.get('camelCaseToHumanFilter');
    });
  });

  it('returns human-readable string with lowercase first letter', function() {
    assert.equal(camelCaseFilter('whyDontWeTestThis'), 'why dont we test this');
  });

  it('returns human-readable string with uppercase first letter', function() {
    assert.equal(camelCaseFilter('whyDontWeTestThis', true), 'Why dont we test this');
  });

  it('takes invalid input like a champ', function() {
    assert.equal(camelCaseFilter(222, true), 222);
  });
});
