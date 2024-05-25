import React from 'react';

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  label: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, totalPages, onPrevious, onNext, label }) => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {label} {page - 1}
      </button>
      <div className="text-gray-700 dark:text-darkText">
        {label} {page} of {Math.ceil(totalPages)}
      </div>
      <button
        onClick={onNext}
        disabled={page >= totalPages}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {label} {page + 1}
      </button>
    </div>
  );
};

export default PaginationControls;
