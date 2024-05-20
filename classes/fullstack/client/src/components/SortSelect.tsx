import React from 'react';

interface SortSelectProps {
  sortKey: 'firstName' | 'email';
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: { value: 'firstName' | 'email'; label: string }[];
}

const SortSelect: React.FC<SortSelectProps> = ({ sortKey, onChange, label, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-darkText mb-1">{label}:</label>
      <select
        value={sortKey}
        onChange={onChange}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
