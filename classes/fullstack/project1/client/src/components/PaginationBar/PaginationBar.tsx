import React from 'react';
import './PaginationBar.css';

type PaginationArrowProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

const PaginationArrow: React.FC<PaginationArrowProps> = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} className="pagination-arrow">
    {children}
  </button>
);

const IconLeft: React.FC = () => <span>&lt;</span>;

const IconRight: React.FC = () => <span>&gt;</span>;

type NumberBadgeProps = {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

const NumberBadge: React.FC<NumberBadgeProps> = ({ className, onClick, children }) => (
  <button onClick={onClick} className={`number-badge ${className}`}>
    {children}
  </button>
);

type PaginationBarProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationBar: React.FC<PaginationBarProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <NumberBadge
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </NumberBadge>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-bar">
      <PaginationArrow onClick={handlePrevious} disabled={currentPage === 1}>
        <IconLeft />
      </PaginationArrow>
      {renderPageNumbers()}
      <PaginationArrow onClick={handleNext} disabled={currentPage >= totalPages}>
        <IconRight />
      </PaginationArrow>
    </div>
  );
};

export default PaginationBar;