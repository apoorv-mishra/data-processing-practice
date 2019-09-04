var Constants = require('./constants');

// Make it a closure so it keeps the scope
// of outer func i.e, keeps `Constants` intact.
var LatLong = (function LatLongClosure() {
  /**
   * Represents a location.
   * @constructor
   * @param {Number} latitude - Latitude of location in degrees.
   * @param {Number} longitude - Longitude of location in degrees.
   */

  function LatLong({ latitude, longitude }) {
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
  }

  /**
   * Calculates the shortest geographical distance(in meters)
   * between two locations(lat, long).
   *
   * @param {Object} location - (lat, long) from which to calculate
   *                            the distance of current(this) location.
   *
   * @returns {Number} Returns the shortest geographical distance between two locations.
   */
  LatLong.prototype.distanceFrom = function (location) {
    var deltaLong = Math.abs(this.longitude.toRad() - location.longitude.toRad());

    var centralAngle = Math.acos(
      Math.sin(this.latitude.toRad()) * Math.sin(location.latitude.toRad()) +
      Math.cos(this.latitude.toRad()) * Math.cos(location.latitude.toRad()) * Math.cos(deltaLong)
    );

    return Constants.EARTH_RADIUS * centralAngle;
  }
  return LatLong;
})();

module.exports = LatLong;
