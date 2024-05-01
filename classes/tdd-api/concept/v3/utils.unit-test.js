import * as utils from './utils';

describe('utils', () => {
  describe('mapNumberToDay', () => {
    it('should return Sunday for 0', () => {
      expect(utils.mapNumberToDay(0)).toBe('Sunday');
    });
    it('should return undefined for foo', () => {
      expect(utils.mapNumberToDay('foo')).toBeUndefined();
    });
  });

  describe('logOperation called with right args', () => {
    describe('calling mapNumberToDay with 0', () => {
      it('should log called with data: 0 result: Sunday', () => {
        const spyLogOperation = jest.spyOn(utils, 'logOperation');
        const spyConsoleLog = jest.spyOn(console, 'log');

        utils.mapNumberToDay(0, utils.logOperation);

        expect(spyLogOperation).toHaveBeenCalledWith(0, 'Sunday');
        expect(spyConsoleLog).toHaveBeenCalledWith('called with data:', 0, 'result:', 'Sunday');
      });
    });
  });
});
