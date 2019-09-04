var Constants = require('./constants');
var LatLong = require('./lat-long');

var Friend = (function FriendClosure(name, userId, latitude, longitude) {
  /**
   * Represents the entity 'Friend'.
   * @constructor
   * @param {Number} latitude - Latitude of location in degrees.
   * @param {Number} longitude - Longitude of location in degrees.
   */
  
  function Friend({ name, user_id, latitude, longitude }) {
    this.name = name;
    this.user_id = Number(user_id);
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
  }
  
  /**
   * Tells whether a friend stays within a
   * specific distance from office.
   *
   * @param {Number} range - Specific distance within which the person should stay.
   *
   * @returns {Boolean} - Returns `true` or `false` based on whether the person stays withing specified range.
   */
  Friend.prototype.isWithin = function(range) {
    var friendLocation = new LatLong({ latitude: this.latitude, longitude: this.longitude });
    var officeLocation = new LatLong({ latitude: Constants.OFFICE_LATITUDE, longitude: Constants.OFFICE_LONGITUDE });
    return (friendLocation.distanceFrom(officeLocation) <= range);
  }

  return Friend;
})();

module.exports = Friend;
