import * as mathOperations from './calc';
import { jest } from '@jest/globals';

describe('calc function integration with add', () => {
  test('should use add function to calculate sum', () => {
    const result = mathOperations.calc(1, 1, 'sum');
    // jest.spyOn(mathOperations, 'add')

    expect(result).toBe(2);
    // expect(mathOperations.add).toHaveBeenCalledWith(1, 1);
  });
  // test('should use add function to calculate sum', () => {
  //   // Mock the add function
  //   const addMock = jest.fn((n1, n2) => n1 + n2);

  //   // Pass the mock as a dependency
  //   const result = mathOperations.calc(1, 1, 'sum');
  //   expect(result).toBe(2);
  //   expect(addMock).toHaveBeenCalledWith(1, 1);
  // });
});
