const assert = require('assert');
const {utcStringToBerlinDate} = require('../dist/lib.js');

const testFn = t => {
  it(`transforms the hour part of ${t.input} into ${t.output}`, () => {
    const date = utcStringToBerlinDate(t.input);
    assert.equal(date.getUTCHours(), t.output);
  });
};

describe('utcStringToBerlinDate(); simple cases', () => {
  const tests = [
    { input: '2018-01-22T07:00:00Z', output: 8 },
    { input: '2018-06-22T07:00:00Z', output: 9 },
    { input: '2019-01-22T07:00:00Z', output: 8 },
    { input: '2019-06-22T07:00:00Z', output: 9 },
    { input: '2020-01-22T07:00:00Z', output: 8 },
    { input: '2020-06-22T07:00:00Z', output: 9 }
  ];

  tests.forEach(testFn);
});

describe('utcStringToBerlinDate(); edge cases', () => {
  const tests = [
    { input: '2018-03-25T00:59:59Z', output: 1 },
    { input: '2018-03-25T01:00:00Z', output: 3 },
    { input: '2018-10-28T00:59:59Z', output: 2 },
    { input: '2018-10-28T01:00:00Z', output: 2 },
  ];

  tests.forEach(testFn);
});
