var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert

const euler4 = require('./euler-4');
const euler89 = require('./euler-89');
const euler102 = require('./euler-102');
const euler148 = require('./euler-148');

console.log(euler4);
describe('euler4',
  () => {
    it('has a function solve', (done) => {
      assert.isFunction(euler4.solve, 'solve is not a function');
      done();
    });
    const solution = euler4.solve(2);
    it('returns an array', (done) => {
      assert.isArray(solution, 'euler4.solve does not return an array');
      done();
    });
    it('returns an array with 3 members', (done) => {
      assert.equal(solution.length, 3, 'euler4.solve does not return an array with 3 members');
      done();
    });
    it('correctly solves for n=2', (done) => {
      assert.sameOrderedMembers(solution, [91,99, 9009]);
      done();
    })
  }
);

describe('euler89',
  () => {
    it('has a function solve', (done) => {
      assert.isFunction(euler89.solve, 'solve is not a function');
      done();
    });
    it('has a function toRoman', (done) => {
      assert.isFunction(euler89.toRoman, 'toRoman is not a function');
      done();
    });
    it('has a function romanToNumber', (done) => {
      assert.isFunction(euler89.romanToNumber, 'romanToNumber is not a function');
      done();
    });
    it('correctly runs in under 1 min', (done) => {
      const start=(new Date()).getTime();
      const solution = euler89.solve();
      const end=(new Date()).getTime();
      const duration = (end-start)/1000/60;
      assert.isBelow(duration, 1);
      done();
    });
    it('correctly solves the example data set', (done) => {
      const solution = euler89.solve();
      assert.equal(solution, 743);
      done();
    });
    it('correctly calculates the simple test file', (done) => {
      const solution = euler89.solve('roman-test.txt');
      assert.equal(solution, 4);
      done();
    });
    it('converts 1999 to roman correctly', (done) => {
      const solution = euler89.toRoman(1999);
      assert.equal(solution, 'MCMXCIX');
      done();
    });
    it('converts MCMXCIX to Number correctly', (done) => {
      const solution = euler89.romanToNumber('MCMXCIX');
      assert.equal(solution, 1999);
      done();
    });
  }
);

describe('euler102',
  () => {
    it('has a function solve', (done) => {
      assert.isFunction(euler102.solve, 'solve is not a function');
      done();
    });
    it('correctly runs in under 1 min', (done) => {
      const start=(new Date()).getTime();
      const solution = euler102.solve();
      const end=(new Date()).getTime();
      const duration = (end-start)/1000/60;
      assert.isBelow(duration, 1);
      done();
    });
    it('correctly solves the example data set', (done) => {
      const solution = euler102.solve('102-known.txt');
      assert.equal(solution, 1);
      done();
    });
  }
);

describe('euler148',
  () => {
    it('has a function solve', (done) => {
      assert.isFunction(euler148.solve, 'solve is not a function');
      done();
    });
    it('correctly runs in under 1 min', (done) => {
      const start=(new Date()).getTime();
      const solution = euler148.solve(10**9);
      const end=(new Date()).getTime();
      const duration = (end-start)/1000/60;
      assert.isBelow(duration, 1);
      done();
    });
    it('correctly solves the example data set', (done) => {
      const solution = euler148.solve(100);
      assert.equal(solution, 2361);
      done();
    });
  }
);
