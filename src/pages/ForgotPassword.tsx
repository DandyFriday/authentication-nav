import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const ForgotPassword: React.FC = () => {
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
    <div className="flex w-full h-screen bg-gray-400">
      <div className='h-[500px] w-[600px] flex 
      items-center justify-center
       bg-white/20  mt-20 pr-[12px] 
       lg:w-1/2' >      
      <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-1 text-black/60 flex 
          items-center justify-center mt-3">Forgot Password</h2>
        <Input
          label="Email"
          type="email"
          name='email'
          value={email}
          onChange={handleChange}
          error={error}
        />
        <button type="submit" className="w-full text-white bg-gray-900  py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
            Send OTP
          </button>
      </form>
      </div>
    </div>
  );
};

export default ForgotPassword;