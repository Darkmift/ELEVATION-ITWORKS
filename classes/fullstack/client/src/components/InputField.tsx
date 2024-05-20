import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-darkText mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500`}
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
