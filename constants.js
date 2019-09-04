/**
 * @file Defines all constants in one place.
 */

var Constants = {}; 

Object.defineProperty(Constants, 'EARTH_RADIUS', {
  value: 6371e3,
  writable: false,
  enumerable: true
});

Object.defineProperty(Constants, 'OFFICE_LATITUDE', {
  value: 12.9611159,
  writable: false,
  enumerable: true
});

Object.defineProperty(Constants, 'OFFICE_LONGITUDE', {
  value: 77.6362214,
  writable: false,
  enumerable: true
});

Object.defineProperty(Constants, 'RANGE', {
  value: 100000,
  writable: false,
  enumerable: true
});

module.exports = Constants;
