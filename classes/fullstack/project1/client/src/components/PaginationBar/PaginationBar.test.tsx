import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaginationBar from './PaginationBar';

test('renders PaginationBar with correct page numbers', () => {
  const onPageChange = jest.fn();
  render(<PaginationBar currentPage={1} totalPages={5} onPageChange={onPageChange} />);

  // Проверка отображения всех номеров страниц
  for (let i = 1; i <= 5; i++) {
    expect(screen.getByText(i)).toBeInTheDocument();
  }
});

test('calls onPageChange with the correct page number when a page number is clicked', () => {
  const onPageChange = jest.fn();
  render(<PaginationBar currentPage={1} totalPages={5} onPageChange={onPageChange} />);

  // Клик по странице 3
  fireEvent.click(screen.getByText('3'));
  expect(onPageChange).toHaveBeenCalledWith(3);
});

test('disables previous button on first page', () => {
  const onPageChange = jest.fn();
  render(<PaginationBar currentPage={1} totalPages={5} onPageChange={onPageChange} />);

  // Проверка кнопки "предыдущая страница" на первой странице
  expect(screen.getByText('<').closest('button')).toBeDisabled();
});

test('disables next button on last page', () => {
  const onPageChange = jest.fn();
  render(<PaginationBar currentPage={5} totalPages={5} onPageChange={onPageChange} />);

  // Проверка кнопки "следующая страница" на последней странице
  expect(screen.getByText('>').closest('button')).toBeDisabled();
});
