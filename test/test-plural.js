'use strict';

const _ = require('lodash');
const assert = require('chai').assert;

require('../lodash-plural.js');

describe('String', function() {
  describe('#apple', function() {
    it('should return apples', function() {
      assert.equal('apples', _.plural('apple'));
    });
  });
  describe('#item', function() {
    it('should return items', function() {
      assert.equal('items', _.plural('item'));
    });
  });
  describe('#community', function() {
    it('should return communities', function() {
      assert.equal('communities', _.plural('community'));
    });
  });
  describe('#entity', function() {
    it('should return entities', function() {
      assert.equal('entities', _.plural('entity'));
    });
  });
  describe('#analyticity', function() {
    it('should return analyticities', function() {
      assert.equal('analyticities', _.plural('analyticity'));
    });
  });
  describe('#crystallinity', function() {
    it('should return crystallinities', function() {
      assert.equal('crystallinities', _.plural('crystallinity'));
    });
  });
});

describe('Number', function() {
  describe('#1', function() {
    it('should return 1s', function() {
      assert.equal('1s', _.plural(1));
    });
  });
  describe('#5', function() {
    it('should return 5s', function() {
      assert.equal('5s', _.plural(5));
    });
  });
});
