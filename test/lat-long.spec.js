var LatLong = require('../lat-long');
var assert = require('assert');

describe('LatLong', function() {
  describe('#distanceFrom', function() {

    it('should correctly calculate shortest geographical distance from a given point', function() {
      assert.equal(new LatLong({ latitude: 52.205, longitude: 0.119 }).distanceFrom(new LatLong({ latitude: 48.857, longitude: 2.351 })).toFixed(), 404279);
    });

    it('should correctly calculate shortest geographical distance from a given point by coercing String to Number', function() {
      assert.equal(new LatLong({ latitude: '52.205', longitude: '0.119' }).distanceFrom(new LatLong({ latitude: '48.857', longitude: '2.351' })).toFixed(), 404279);
    });

  });
})
