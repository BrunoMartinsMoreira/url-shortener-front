import { ChangeEvent } from 'react';

interface inputProps {
  value: string;
  placeholder: string;
  id: string;
  labelText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UrlInput = ({
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
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-[40vw] bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block p-2.5 pr-3 py-2`}
      />
    </div>
  );
};
