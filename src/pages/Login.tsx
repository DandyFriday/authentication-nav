import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const tempErrors = { email: '', password: '' };
    if (!form.email) tempErrors.email = 'Email is required';
    if (!form.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success');
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-400">
      <div className='h-[500px] w-[600px] flex 
      items-center justify-center
       bg-white/20  mt-20 pr-[12px] 
       lg:w-1/2'>        
        <form onSubmit={handleSubmit} className=''>
          <h1 className='flex justify-center font-extrabold
           text-black/60'>Welcome Back </h1>
          <h2 className="text-2xl mb-1 text-black/60 flex 
          items-center justify-center mt-3">Login your details correctly</h2>        
          <Input
          label="Email"
          type="email"
          name='email'
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          />
          <Input
          label="Password"
          type="password"
          name='password'
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          />
           <button type="submit" className="w-full text-white bg-gray-900  py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
           Login
          </button>
          <div className='pl-3 flex'> 
          <h2 className='text-black/45'>Forgot password? </h2>
          <Link to="/otp" className="hover:no-underline">
           <span className='text-white ml-6'>Reset password</span> 
          </Link>
          </div>
        </form>
      </div>
      <div className="hidden relative lg:flex h-[500px] w-[600px] items-center justify-center bg-gray-900 mt-20 rounded-tr-lg">
        <div className="w-60 h-60 bg-gradient-to-tr from-slate-600 to-white rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg rounded-tl-lg rounded-tr-lg"/>     
          
      </div>
    </div>
  );
};

export default Login;