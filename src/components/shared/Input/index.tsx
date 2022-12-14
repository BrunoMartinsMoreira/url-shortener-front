import { ChangeEvent } from 'react';

interface inputProps {
  type: string;
  value: string;
  placeholder: string;
  id: string;
  labelText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  value,
  placeholder,
  id,
  labelText,
  onChange,
}: inputProps): JSX.Element => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block w-full max-w-4xl p-2.5 mr-3"
      />
    </div>
  );
};
