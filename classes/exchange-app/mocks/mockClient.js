import { mockCodes, mockExchangeResults, mockRates } from "./responses";

const mockAxiosInstance = {
  get: jest.fn((url) => {
    console.log("🚀 ~ get:jest.fn ~ url:", url)
    // Logic to determine which mock function to use based on the URL pattern
    if (url.includes('/latest/')) {
      // Extract baseCurrency code from URL
      const baseCurrency = url.split('/').pop();
      return mockRates(baseCurrency);
    } else if (url === '/codes') {
      return mockCodes();
    } else if (url.includes('/pair/')) {
      // Extract baseCurrency, targetCurrency, and amount from URL
      const [, , baseCurrency, targetCurrency, amount] = url.split('/');
      return mockExchangeResults(baseCurrency, targetCurrency, Number(amount));
    }

    // Fallback mock response for unexpected URLs
    return Promise.reject(new Error(`No mock setup for ${url}`));
  }),
};

export default mockAxiosInstance;
