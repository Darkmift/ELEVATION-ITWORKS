import { screen } from '@testing-library/dom';
import { init, renderExchangePage, renderExchangeCalculator, renderNavbarElement } from './main';

describe('Render Tests', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <nav data-navbar></nav>
      <div id="app"></div>
    `;
  });

  describe('renderExchangePage', () => {
    test('should render exchange page', () => {
      renderExchangePage();
      expect(screen.getByText('Exchange page')).toBeInTheDocument();
    });

    test('uses jest-dom', () => {
      document.body.innerHTML = `
        <span data-testid="not-empty"><span data-testid="empty"></span></span>
        <div data-testid="visible">Visible Example</div>
      `;

      expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
      expect(screen.getByText('Visible Example')).toBeVisible();
    });

    test('should not render exchange calculator', () => {
      renderExchangePage();
      expect(screen.queryByText('Exchange calculator')).not.toBeInTheDocument();
    });

    // test renderExchangeCalculator
    test('should render exchange calculator', () => {
      renderExchangeCalculator();
      expect(screen.getByText('Exchange calculator')).toBeInTheDocument();
    });
  });
});
