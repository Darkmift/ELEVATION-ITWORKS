import { add, subtract } from './calc';

describe('calc functions', () => {
  // 1+1 = 2
  test('should correctly add 1 and 1 to get 2', () => {
    expect(add(1, 1)).toBe(2);
  });
  // 2-1=1
  test('should correctly subtract 2 and 1 to get 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
