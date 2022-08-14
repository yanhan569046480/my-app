const isCanaryShadow = require('./CanaryUtil');
const canaryMatrixDifferentSet = require('./canaryMatrixDifferentSet');

const highWeightCanaryMap = new Map();

const lowWeightCanaryMap = new Map();
  
test('differentSet', () => {
  expect(isCanaryShadow(canaryMatrixDifferentSet, highWeightCanaryMap, lowWeightCanaryMap)).toBe(true);
});