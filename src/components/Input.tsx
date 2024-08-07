
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, error }) => {
  return ( 
  <div className="mb-4">
    <label className="block
     text-gray-700">{label}</label>
    <input
     className={`mt-1 p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      /> 
    {error && <p className="text-red-500 text-sm mt-1">
      {error}</p>}
  </div>
);
}

export default Input;