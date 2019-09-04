/**
 * @file Contains various utility functions.
 */

var fs = require('fs');
var camelize = require('camelcase');
var decamelize = require('decamelize');

var Utils = {};

Utils.File = {};

/**
 * Reads a file, given its name.
 *
 * @param {String} fileName - Name of file to be read.
 * 
 * @returns {Promise} Returns promise which is either
 *                    fulfilled with file contents or
 *                    rejected with an error.
 */
Utils.File.read = (fileName) => {
  // Promisify `fs.readFile()`
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) { return reject(err); }
      resolve(data);
    });
  });
};

/**
 * Parses the json string and returns the
 * object described by it.
 *
 * @param {String} json - JSON string.
 *
 * @returns {Object} Returns the object described by the provided JSON string.
 */
Utils.parseJSON= (json) => {
  return JSON.parse(json);
};

/**
 * Converts 'snake_case' to 'camelCase'.
 *
 * @param {Object} obj - Object whose 'snake' cased fields
 *                       are to be converted to 'camel' case.
 *
 * @returns {Object} Returns the object with 'camel' cased fields.
 */
/** @todo Reimplement it to circumvent the bug in original module. */
Utils.camelize = (obj) => {
  return JSON.parse(camelize(JSON.stringify(obj)));
}

/**
 * Converts 'camelCase' to 'snake_case'.
 *
 * @param {Object} obj - Object whose 'camel' cased fields
 *                       are to be converted to 'snake' case.
 *
 * @returns {Object} Returns the object with 'snake' cased fields.
 */
/** @todo Reimplement it to circumvent the bug in original module. */
Utils.decamelize = (obj) => {
  return JSON.parse(decamelize(JSON.stringify(obj)));
}

module.exports = Utils;

