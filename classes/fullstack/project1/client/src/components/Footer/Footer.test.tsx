import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer, { FooterProps } from './Footer';

const renderFooter = (props: Partial<FooterProps> = {}) => {
  const defaultProps: FooterProps = {
    total: 100,
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };
  const { container } = render(<Footer {...defaultProps} {...props} />);
  const footerElement = container.querySelector('.footer');
  return { footerElement, props: defaultProps };
};

describe('Footer', () => {
  it('renders total builds correctly', () => {
    const { footerElement } = renderFooter({ total: 50 });
    expect(footerElement).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('total builds')).toBeInTheDocument();
  });

  it('renders pagination buttons correctly', () => {
    renderFooter({ currentPage: 1, totalPages: 5 });
    expect(screen.getByText('<')).toBeDisabled();
    expect(screen.getByText('>')).toBeEnabled();
    expect(screen.getByText('1')).toHaveClass('active');
    expect(screen.getByText('2')).not.toHaveClass('active');
  });

  it('calls onPageChange with the correct argument when a page number is clicked', () => {
    const onPageChange = jest.fn();
    renderFooter({ currentPage: 1, totalPages: 5, onPageChange });

    fireEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with the correct argument when previous button is clicked', () => {
    const onPageChange = jest.fn();
    renderFooter({ currentPage: 2, totalPages: 5, onPageChange });

    fireEvent.click(screen.getByText('<'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange with the correct argument when next button is clicked', () => {
    const onPageChange = jest.fn();
    renderFooter({ currentPage: 2, totalPages: 5, onPageChange });

    fireEvent.click(screen.getByText('>'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
