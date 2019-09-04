var assert = require('assert');

var Polyfill = require('../polyfill');
Polyfill.run();

describe('Polyfill', function() {
  describe('Number', function() {
    describe('#toRad', function() {
      it('should convert degrees to radians', function() {
        var degrees = 90;
        assert.equal(degrees.toRad(), Math.PI * 0.5);
      });
    });
  });

  describe('Array', function() {
    describe('#search', function() {

      it('should return the index of searched element', function() {
        assert.equal([1, 3, 10, 11].search(10), 2);
      });

      it('should return -1 if searched element can\'t be found', function() {
        assert.equal([1, 3, 10, 11].search(5), -1);
      });

    });

    describe('#sortBy', function() {

      it('should sort the array by a certain prop in ascending order', function() {
        var arr = [
          { latitude: 12.986375, user_id: 12, name: "Chris", longitude: 77.043701 },
          { latitude: 11.92893, user_id: 1, name: "Alice", longitude: 78.27699 },
          { latitude: 11.8856167, user_id: 2, name: "Ian", longitude: 78.4240911 }
        ];
        assert.deepEqual(
          arr.sortBy({ prop: 'user_id', order: 'asc' }),
          [
            { latitude: 11.92893, user_id: 1, name: "Alice", longitude: 78.27699 },
            { latitude: 11.8856167, user_id: 2, name: "Ian", longitude: 78.4240911 },
            { latitude: 12.986375, user_id: 12, name: "Chris", longitude: 77.043701 }
          ]
        );
      });

      it('should throw an error if prop is missing', function() {
        assert.equal([1, 5, 2, 4].sortBy({ order: 'asc' }).message, 'sortBy attribute is mandatory');
      });

      it('should sort the array by a certain prop in descending order', function() {
        var arr = [
          { latitude: 12.986375, user_id: 12, name: "Chris", longitude: 77.043701 },
          { latitude: 11.92893, user_id: 1, name: "Alice", longitude: 78.27699 },
          { latitude: 11.8856167, user_id: 2, name: "Ian", longitude: 78.4240911 }
        ];
        assert.deepEqual(
          arr.sortBy({ prop: 'user_id', order: 'desc' }),
          [
            { latitude: 12.986375, user_id: 12, name: "Chris", longitude: 77.043701 },
            { latitude: 11.8856167, user_id: 2, name: "Ian", longitude: 78.4240911 },
            { latitude: 11.92893, user_id: 1, name: "Alice", longitude: 78.27699 }
          ]
        );
      });

    });

    describe('#summands', function() {

      it('should get k summands of a given number from the specified array', function() {
        var arr = [ 3, 1, 2, 0 ].sort((a, b) => a - b);
        var sumExpected = 6;
        var summands = arr.summands(3, sumExpected);

        // Ensure summands are unique
        var uniqueSummands = summands.reduce((accumulator, currentValue) => {
          if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
          }
          return accumulator;
        }, []);

        assert.equal(uniqueSummands.length, summands.length);

        var sumFound = summands.reduce((accumulator, currentValue) => accumulator + currentValue);

        assert.equal(sumFound, sumExpected);
      });

      it('should return empty array is summands not found', function() {
        var arr = [ 3, 1, 2, 0 ].sort((a, b) => a - b);
        var summands = arr.summands(3, 8);
        assert.equal(summands.length, 0);
      });

    });
  });

});
