import * as mathOperations from './calc';
import { jest } from '@jest/globals';

describe('calc function integration with add', () => {
  test('should use add function to calculate sum', () => {
    // Mock the add function
    const addSpy = jest.spyOn(mathOperations, 'add');

    // Pass the mock as a dependency
    mathOperations.calc(1, 1, 'sum', { add: mathOperations.add });
    expect(addSpy).toHaveBeenCalledWith(1, 1);
  });
  test('should use add function to calculate sum', () => {
    // Mock the add function

    // Pass the mock as a dependency
    const result = mathOperations.calc(1, 1, 'sum', { add: mathOperations.add });
    expect(result).toBe(2);
  });
});
