import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import BackArrow from '../components/BackArrow';
import { Link } from 'react-router-dom';

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
      navigate('/login');
    }
  };

  return (
    <div className="flex  items-center justify-center h-screen w-full
         bg-gray-400">          
      <div className="h-[400px] w-[400px]  
           items-center justify-center
           bg-white/20  mt-1 pr-[12px] p-8 
           rounded-lg shadow-md text-center "> 
           <BackArrow/>
      <form onSubmit={handleSubmit} className=''>
      <h2 className="font-bold text-2xl text-black/60 ">Reset your password</h2>
      <p className='text-black/60 mb-4'>Chech your email, we have sent you an OTP </p>

        <Input
          label="Email"
          type="email"
          name='email'
          value={email}
          onChange={handleChange}
          error={error}
        />
        <button type="submit" className="w-full text-white bg-gray-900 py-2 px-4 
        rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
           Send OTP
          </button>
          <div className='pl-3 flex'> 
          <h2 className='text-black/45'>Password Remembered?</h2>
          <Link to="/login" className="hover:no-underline">
           <span className='text-white ml-[6rem]'>Login</span> 
          </Link>
          </div>
      </form>
      </div>
    </div>
  );
};

export default Otp;