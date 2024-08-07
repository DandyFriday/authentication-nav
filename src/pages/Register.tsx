import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Register: React.FC = () =>  {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', flname: '' , confirmPassword: '' });
  const [errors, setErrors] = useState({ email: '', password: '', flname: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const tempErrors = { email: '', password: '',flname: '', confirmPassword: '' };
    if (!form.flname) tempErrors.flname = 'Full name is required';
    if (!form.email) tempErrors.email = 'Email is required';
    if (!form.password) tempErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate('/login');
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-400">
      <div className='h-[500px] w-[600px] flex items-center 
      justify-center bg-white/20 mt-20 pr-[12px] lg:w-1/2 '>        
        <form onSubmit={handleSubmit} className=' h-[400px] mb-16 '>
          <h2 className="text-2xl font-bold mb-1 text-black/60 
          flex items-center justify-center">Register with Us</h2>
          <Input
          label="Full name: (Surname first)"
          type="text"
          name='flname'
          value={form.flname}
          onChange={handleChange}
          error={errors.flname}        
          />
          <Input        
          label= "Email"
          type="email"
          name="email"                   
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
          <Input
          label="Confirm Password"
          type="password"
          name='confirmPassword'
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}        
          />
          <button type="submit" className="w-full text-white bg-gray-900 py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
           Register
          </button>
          <div className="mt-3 flex justify-between">
          <div>   
          <input type="checkbox"/>
          <label className="text-white pl-2">Remember Me</label>
          </div>
          <div className='pl-3 flex'> 
          <h2 className='text-black/45'>Already Registered? </h2>
          <Link to="/login" className="hover:no-underline">
           <span className='text-white ml-1'>Login</span> 
          </Link>
          </div>
          </div>
          
        </form>        
      </div>
      <div className="hidden relative lg:flex h-[500px] w-[600px] items-center justify-center bg-gray-900 mt-20 rounded-tr-lg">
        <div className="w-60 h-60 bg-gradient-to-tr from-gray-400 to-gray-800 rounded-full animate-pulse"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg rounded-tl-lg rounded-tr-lg"/>     
          
      </div>
    </div>
  );
};

export default Register;