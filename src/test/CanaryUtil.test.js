const isCanaryShadow = require('./CanaryUtil');

const preciseNotIncludedGeneral = require('./preciseNotIncludedGeneral');

const preciseAllIncludedGeneralAndGeneralPriorityLessThan = require('./preciseAllIncludedGeneralAndGeneralPriorityLessThan');
const preciseAllIncludedGeneralAndGeneralPriorityLargerThan = require('./preciseAllIncludedGeneralAndGeneralPriorityLargerThan');
const preciseAllIncludedGeneralAndPriorityEqualAndNameLessThan = require('./preciseAllIncludedGeneralAndPriorityEqualAndNameLessThan');
const preciseAllIncludedGeneralAndPriorityEqualAndNameLargerThan = require('./preciseAllIncludedGeneralAndPriorityEqualAndNameLargerThan');

const precisePartiallyIncludedGeneralAndPriorityLessThan = require('./precisePartiallyIncludedGeneralAndPriorityLessThan');
const precisePartiallyIncludedGeneralAndPriorityLargerThan = require('./precisePartiallyIncludedGeneralAndPriorityLargerThan');
const precisePartiallyIncludedGeneralAndPriorityEqualAndNameLessThan = require('./precisePartiallyIncludedGeneralAndPriorityEqualAndNameLessThan');
const precisePartiallyIncludedGeneralAndPriorityEqualAndNameLargerThan = require('./precisePartiallyIncludedGeneralAndPriorityEqualAndNameLargerThan');

test('preciseNotIncludedGeneral', () => {
  expect(isCanaryShadow(preciseNotIncludedGeneral)).toBe(false);
});

test('preciseAllIncludedGeneralAndGeneralPriorityLessThan', () => {
  expect(isCanaryShadow(preciseAllIncludedGeneralAndGeneralPriorityLessThan)).toBe(true);
});
test('preciseAllIncludedGeneralAndGeneralPriorityLargerThan', () => {
  expect(isCanaryShadow(preciseAllIncludedGeneralAndGeneralPriorityLargerThan)).toBe(true);
});
test('preciseAllIncludedGeneralAndPriorityEqualAndNameLessThan', () => {
  expect(isCanaryShadow(preciseAllIncludedGeneralAndPriorityEqualAndNameLessThan)).toBe(true);
});
test('preciseAllIncludedGeneralAndPriorityEqualAndNameLargerThan', () => {
  expect(isCanaryShadow(preciseAllIncludedGeneralAndPriorityEqualAndNameLargerThan)).toBe(true);
});

test('precisePartiallyIncludedGeneralAndPriorityLessThan', () => {
  expect(isCanaryShadow(precisePartiallyIncludedGeneralAndPriorityLessThan)).toBe(true);
});
test('precisePartiallyIncludedGeneralAndPriorityLargerThan', () => {
  expect(isCanaryShadow(precisePartiallyIncludedGeneralAndPriorityLargerThan)).toBe(false);
});
test('precisePartiallyIncludedGeneralAndPriorityEqualAndNameLessThan', () => {
  expect(isCanaryShadow(precisePartiallyIncludedGeneralAndPriorityEqualAndNameLessThan)).toBe(true);
});
test('precisePartiallyIncludedGeneralAndPriorityEqualAndNameLargerThan', () => {
  expect(isCanaryShadow(precisePartiallyIncludedGeneralAndPriorityEqualAndNameLargerThan)).toBe(false);
});
