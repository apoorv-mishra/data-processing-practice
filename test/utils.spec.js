var Utils = require('../utils');
var path = require('path');
var assert = require('assert');

var File = Utils.File;

describe('Utils', function() {
  describe('File', function() {
    describe('#read', function() {

      it('should successfully read a file', function() {
        return File.read(path.resolve(__dirname, '../friends.json'))
          .then(data => assert(data))
          .catch(err => assert(!err));
      });

      it('should err if err occurs while reading a file', function() {
        return File.read(path.resolve(__dirname, '../enemies.json'))
          .then(data => assert(!data))
          .catch(err => assert(err));
      });
    });

  });

  describe('#parseJSON', function() {
    it('should return an object by parsing json', function() {
      assert.deepEqual(Utils.parseJSON('{"result":true, "count":42}'), { result: true, count: 42 });
    });
  });
});
