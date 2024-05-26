import React from 'react';

export type FooterProps = {
  total: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
const Footer: React.FC<FooterProps> = ({ total, currentPage, totalPages, onPageChange }) => {
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
        <button
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="footer">
      <div className="info-section">
        <span className="number-bage">{total}</span>
        <span>total builds</span>
      </div>
      <div className="pagination-section">
        <button onClick={handlePrevious} disabled={currentPage === 1} className="pagination-button">
          &lt;
        </button>
        {renderPageNumbers()}
        <button onClick={handleNext} disabled={currentPage >= totalPages} className="pagination-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Footer;
