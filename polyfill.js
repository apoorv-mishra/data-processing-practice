/** Use polyfills for missing methods */
var Polyfill = {};

/** Dynamically sprinkles polyfills over the target script
 *
 * @example
 * Polyfill.run();
 */

Polyfill.run = () => {

  if (typeof(Number.prototype.toRad) === 'undefined') {
    /**
     * Polyfill for converting degrees to radians.
     * 
     * @returns {Number} Returns value in radians.
     */
    Number.prototype.toRad = function () {
      return this * Math.PI / 180
    };
  }

  if (typeof(Array.prototype.search) === 'undefined') {
    /**
     * Polyfill for binary search algorithm.
     *
     * @param {Number} number - Number to be searched.
     *
     * @returns {Number} Returns the index of the searched element if found, -1 otherwise.
     */
    Array.prototype.search = function (number) {
      var low = 0;
      var high = this.length - 1;
      var mid;

      while (low <= high) {
        mid = (low + high) >> 1;
        if (number < this[mid]) {
          high = mid - 1;
        } else if (number > this[mid]) {
          low = mid + 1;
        } else {
          return mid;
        }
      }
      return -1;
    };
  }

  if (typeof(Array.prototype.sortBy) === 'undefined') {
    /**
     * Polyfill for sorting an array of objects by a certain property.
     *
     * @param {String} prop - Property to sort by.
     * @param {String} order - Sort order.
     *
     * @returns {Object} Returns the sorted array.
     */

    Array.prototype.sortBy = function({ prop, order }) {
      if (!prop) {
        return new Error('sortBy attribute is mandatory');
      }

      if (order === 'asc') {
        return this.sort((a, b)  => a[prop] - b[prop]);
      } else if (order === 'desc') {
        return this.sort((a, b) => b[prop] - a[prop]);
      } else {
        return this;
      }
    };
  }

  if (typeof(Array.prototype.summands) === 'undefined') {
    /**
     * Returns k elements from an array
     * whose sum is equal to a given number.
     *
     * @param {Number} k - Number of summands.
     * @param {Number} sum - Given number for which to find summands.
     *
     * @return {Object} Returns an array containing indices of summands in the given array.
     */
    Array.prototype.summands = function (k, sum) {
      // Handle base case
      if (k === 1) {
        return (this.search(sum) === -1 ? []: [ this.search(sum) ]);
      }

      var summands = [];
      for (var i = 0; i < this.length; i++) {
        summands = this.summands(k - 1, sum - this[i]);

        if (summands.length === 0) { continue; }

        summands.sort((a, b) => a - b);
        if (summands.search(i) === -1) {
          summands.push(i);
          break;
        }
      }
      return (summands.length !== k ? []: summands);
    }
  } 

};

module.exports = Polyfill;
