import React from 'react';

export type PaginationProps = {
  total: number;
  page: number;
  onClick: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ total, page, onClick }) => {
  const pageNumbers = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      {pageNumbers.map((number) => {
        return (
          <button
            className={
              number === page
                ? 'bg-blue-500 text-white px-4 py-2 rounded-md'
                : 'bg-gray-500 text-white px-4 py-2 rounded-md'
            }
            key={number}
            onClick={() => {
              onClick(number);
            }}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
