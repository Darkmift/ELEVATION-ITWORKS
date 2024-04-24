import * as mathOperations from './calc';

describe('add function', () => {
  test.each([
    [1, 1, 2],
    [-1, 1, 0],
    [100, 200, 300]
  ])('should correctly add %i and %i to get %i', (n1, n2, expected) => {
    expect(mathOperations.add(n1, n2)).toBe(expected);
  });
});
