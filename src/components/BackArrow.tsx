import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackArrow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex space-x-1 text-gray-600 mb-4 pr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor" 
        className="w-10 h-6 mb-0 pt-1 text-black mr-[-2rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0 17l-7-7 7-7"
        />
      </svg>
      <span className='mb-6 text-black '>Back </span>
    </button>
  );
};

export default BackArrow; 