import { FC } from 'react';

interface InputComponentProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<InputComponentProps> = ({ id, label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default InputComponent;
