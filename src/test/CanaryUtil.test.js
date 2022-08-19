const isCanaryShadow = require('./CanaryUtil');

const preciseSetContainsGeneralSet = require('./preciseSetContainsGeneralSet');
const preciseSetEqualGeneralSetAndPriorityLessThan = require('./preciseSetEqualGeneralSetAndPriorityLessThan');
const preciseSetEqualGeneralSetAndPriorityEqualAndNameLessThan = require('./preciseSetEqualGeneralSetAndPriorityEqualAndNameLessThan');
const preciseSetEqualGeneralSetAndPriorityEqualAndNameLargerThan = require('./preciseSetEqualGeneralSetAndPriorityEqualAndNameLargerThan');
const preciseSetEqualGeneralSetAndPriorityLargerThan = require('./preciseSetEqualGeneralSetAndPriorityLargerThan');
const preciseSetNotContainsGeneralSetAndPriorityLessThan = require('./preciseSetNotContainsGeneralSetAndPriorityLessThan');
const preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLessThan = require('./preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLessThan');
const preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLargerThan = require('./preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLargerThan');
const preciseSetNotContainsGeneralSetAndPriorityLargerThan = require('./preciseSetNotContainsGeneralSetAndPriorityLargerThan');

test('preciseSetContainsGeneralSet', () => {
  expect(isCanaryShadow(preciseSetContainsGeneralSet)).toBe(false);
});

test('preciseSetEqualGeneralSetAndPriorityLessThan', () => {
  expect(isCanaryShadow(preciseSetEqualGeneralSetAndPriorityLessThan)).toBe(true);
});

test('preciseSetEqualGeneralSetAndPriorityEqualAndNameLessThan', () => {
  expect(isCanaryShadow(preciseSetEqualGeneralSetAndPriorityEqualAndNameLessThan)).toBe(true);
});

test('preciseSetEqualGeneralSetAndPriorityEqualAndNameLargerThan', () => {
  expect(isCanaryShadow(preciseSetEqualGeneralSetAndPriorityEqualAndNameLargerThan)).toBe(true);
});

test('preciseSetEqualGeneralSetAndPriorityLargerThan', () => {
  expect(isCanaryShadow(preciseSetEqualGeneralSetAndPriorityLargerThan)).toBe(true);
});

test('preciseSetNotContainsGeneralSetAndPriorityLessThan', () => {
  expect(isCanaryShadow(preciseSetNotContainsGeneralSetAndPriorityLessThan)).toBe(true);
});

test('preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLessThan', () => {
  expect(isCanaryShadow(preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLessThan)).toBe(true);
});

test('preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLargerThan', () => {
  expect(isCanaryShadow(preciseSetNotContainsGeneralSetAndPriorityEqualAndNameLargerThan)).toBe(false);
});

test('preciseSetNotContainsGeneralSetAndPriorityLargerThan', () => {
  expect(isCanaryShadow(preciseSetNotContainsGeneralSetAndPriorityLargerThan)).toBe(false);
});
