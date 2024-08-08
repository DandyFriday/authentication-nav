import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Otp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else {
      setError('');
      navigate('/reset-password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 ">
      <h2 className="text-2xl font-bold mb-4">Reset paasword</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name='email'
          value={email}
          onChange={handleChange}
          error={error}
        />
        <button type="submit" className="w-full text-white bg-gray-900 py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
           Send OTP
          </button>
      </form>
    </div>
  );
};

export default Otp;