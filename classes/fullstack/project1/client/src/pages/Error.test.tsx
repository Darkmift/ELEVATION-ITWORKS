import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Error from './Error';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}))

describe('Error Component', () => {
  it('renders the default error message', () => {
    render(<Error />);
    
    expect(screen.getByText('Something went wrong 😢')).toBeInTheDocument();
  });

  it('renders a custom error message', () => {
    const customMessage = 'Custom error message';
    render(<Error message={customMessage} />);
    
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('navigate back when the button is clicked', () => {
    render(<Error />);
    
    fireEvent.click(screen.getByRole('button', { name: /go back/i }));
    
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });
});