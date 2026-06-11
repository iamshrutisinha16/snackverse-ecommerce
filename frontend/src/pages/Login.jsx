import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authApi';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      login(data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid Credentials');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 text-center mb-2">Welcome Back!</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Grab your favorite healthy snacks easily</p>
        
        {error && <div className="bg-red-50 text-red-500 text-sm p-3 rounded-xl mb-4 text-center font-semibold">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 transition" placeholder="name@domain.com" />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 transition" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-amber-500 text-white py-3 rounded-xl font-bold hover:bg-amber-600 shadow-lg shadow-amber-500/20 transition">
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">New to Snackverse? <Link to="/signup" className="text-amber-500 font-bold hover:underline">Create account</Link></p>
      </div>
    </div>
  );
};

export default Login;