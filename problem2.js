/**
 * @file Contains solution to problem statement (2).
 *
 * Problem: I have some friends records in a text file
 * (friends.json) -- one friend per line, JSON-encoded.
 * I want to invite any friends within 100km of our
 * Bangalore office which is almost like our home
 * (GPS coordinates 12.9611159,77.6362214) for some
 * food and drinks on us.
 *
 * Write a program that will read the full list of
 * friends and output the names and user ids of
 * matching friends (within 100km), sorted by user id (ascending).
 */


const Utils = require('./utils');
const Friend = require('./friend');
const RANGE = require('./constants').RANGE;

const File = Utils.File;
const filePath = './friends.json';

const Polyfill = require('./polyfill');
Polyfill.run();

File.read(filePath)
  .then(Utils.parseJSON)
  .then(friends => friends.filter(f => new Friend(f).isWithin(RANGE)))
  .then(invitees => invitees.sortBy({ prop: 'user_id', order: 'asc' }))
  .then(console.log)
  .catch(err => console.log(err));
