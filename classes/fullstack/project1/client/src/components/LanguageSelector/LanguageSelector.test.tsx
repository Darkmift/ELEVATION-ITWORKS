import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from './LanguageSelector';

// Mock the i18next translation hook
const changeLanguageMock = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: changeLanguageMock,
      language: 'en',
    },
  }),
}));

describe('LanguageSelector', () => {
  beforeEach(() => {
    changeLanguageMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<LanguageSelector />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('opens and closes the dropdown menu', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Open the dropdown
    fireEvent.click(button);
    expect(screen.getByText('עברית')).toBeInTheDocument();
    
    // Close the dropdown by clicking outside
    fireEvent.mouseDown(document);
    expect(screen.queryByText('עברית')).not.toBeInTheDocument();
  });

  it('changes the language to Hebrew', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Open the dropdown
    fireEvent.click(button);
    
    // Click on Hebrew
    const hebrewOption = screen.getByRole('menuitem', { name: 'עברית' });
    fireEvent.click(hebrewOption);
    
    // Ensure language change function is called
    expect(changeLanguageMock).toHaveBeenCalledWith('he');
  });

  it('changes the language to English', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');
    
    // Open the dropdown
    fireEvent.click(button);
    
    // Click on English
    const englishOption = screen.getByRole('menuitem', { name: 'English' });
    fireEvent.click(englishOption);
    
    // Ensure language change function is called
    expect(changeLanguageMock).toHaveBeenCalledWith('en');
  });
});
