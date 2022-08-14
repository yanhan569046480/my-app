const isCanaryShadow = require('./CanaryUtil');
const canaryMatrixDifferentHeaders = require('./canaryMatrixDifferentHeaders');
const canaryMatrixDifferenceSet = require('./canaryMatrixDifferenceSet');
const canaryMatrixSameHeaders = require('./canaryMatrixSameHeaders');
const canaryMatrixDifferentPriority = require('./canaryMatrixDifferentPriority');
const samePriorityDifferentName = require('./samePriorityDifferentName');
const samePriorityDifferentName2 = require('./samePriorityDifferentName2');
const canaryMatrixDifferentPriority2 = require('./canaryMatrixDifferentPriority2');

const highWeightCanaryMap = new Map();

const lowWeightCanaryMap = new Map();

test('differentHeaders', () => {
  expect(isCanaryShadow(canaryMatrixDifferentHeaders, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});

test('differenceSet', () => {
  expect(isCanaryShadow(canaryMatrixDifferenceSet, highWeightCanaryMap, lowWeightCanaryMap)).toBe(false);
});

test('sameHeaders', () => {
  expect(isCanaryShadow(canaryMatrixSameHeaders, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});

test('differentPriority', () => {
  expect(isCanaryShadow(canaryMatrixDifferentPriority, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});

test('samePriorityDifferentName', () => {
  expect(isCanaryShadow(samePriorityDifferentName, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});

test('samePriorityDifferentName2', () => {
  expect(isCanaryShadow(samePriorityDifferentName2, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});

test('differentPriority2', () => {
  expect(isCanaryShadow(canaryMatrixDifferentPriority2, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});
