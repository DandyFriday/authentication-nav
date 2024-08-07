import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';


const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', OTP: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ password: '', OTP: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const tempErrors = { password: '', OTP: '', confirmPassword: '' };
    if (!form.OTP) tempErrors.OTP = 'OTP is required';
    if (!form.password) tempErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate('/forgot-password');
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-400">
      <div className='h-[500px] w-[600px] flex 
      items-center justify-center
       bg-white/20  mt-20 pr-[12px]'>
      <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-1 text-black/60 
          flex items-center justify-center">Reset Password</h2>
        
      <Input
          label="Enter OTP"
          type="OTP" 
          name='OTP'         
          value={form.OTP}
          onChange={handleChange}
          error={errors.OTP}
        />
        <Input
          label="New Password"
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
        <button type="submit" className="w-full text-white bg-gray-900 
         py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:shadow-outline mt-4">
           Reset password
          </button>
      </form>
      </div>
      <div className="hidden relative lg:flex h-[500px] w-[600px] items-center justify-center bg-gray-900 mt-20 rounded-tr-lg">
        <div className="w-60 h-60 bg-gradient-to-tr from-slate-600 to-white rounded-full "/>
        </div> 
    </div>
  );
};

export default ResetPassword ;