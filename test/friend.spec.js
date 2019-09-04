var assert = require('assert');
var Friend = require('../friend');

describe('Friend', function() {
  describe('#isWithin', function() {

    it('should tell whether a friend stays within a specified range from office', function() {
      assert.equal(new Friend({ name: 'Harshit', user_id: 1, latitude: 12.9611159, longitude: 77.6362214 }).isWithin(100000), true);
    });

    it('should tell whether a friend stays within a specified range from office by coercing String values to Number for latitude and longitude', function() {
      assert.equal(new Friend({ name: 'Harshit', user_id: 1, latitude: '12.9611159', longitude: '77.6362214' }).isWithin(100000), true);
    });

    it('should tell whether a friend stays within a specified range from office by coercing Strings to Number for user_id, latitude and longitude', function() {
      assert.equal(new Friend({ name: 'Harshit', user_id: 1, latitude: '12.9611159', longitude: '77.6362214' }).isWithin(100000), true);
    });
  });

});
