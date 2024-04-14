import mockAxiosInstance from '../../mocks/mockClient';
jest.mock('./index', () => mockAxiosInstance);
import { getRates, getSupportedCurrencies, getExchangeResult } from './client';

// expect methods to be defined
describe('http/client', () => {
  describe('Should be defined', () => {
    it('should have getRates defined', () => {
      expect(getRates).toBeDefined();
    });

    it('should have getSupportedCurrencies defined', () => {
      expect(getSupportedCurrencies).toBeDefined();
    });

    it('should have getExchangeResult defined', () => {
      expect(getExchangeResult).toBeDefined();
    });
  });

  // test getRates
  describe('getRates', () => {
    it('should return rates', async () => {
      const response = await getRates('USD');
      expect(response.conversion_rates).toBeDefined();
    });
  });

  // test getSupportedCurrencies
  describe('getSupportedCurrencies', () => {
    it('should return supported currencies', async () => {
      const response = await getSupportedCurrencies();
      expect(response.supported_codes).toBeDefined();
    });
  });

  // test getExchangeResult
  describe('getExchangeResult', () => {
    it('should return exchange result', async () => {
      const response = await getExchangeResult('USD', 'EUR', 100);
      expect(response.conversion_rate).toBeDefined();
      expect(response.conversion_result).toBeDefined();
    });
  });
});
