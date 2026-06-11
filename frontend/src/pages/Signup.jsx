import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../api/authApi';
import { AuthContext } from '../context/AuthContext';
import MainLayout from '../layouts/MainLayout';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const data = await registerUser(name, email, password);
      login(data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Database execution registration mismatch.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-8 bg-white">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-400"></div>
          
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Identity</h2>
            <p className="text-sm text-gray-400 font-medium">Initialize zero-fried diagnostic crunchy arrays</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-500 text-xs font-bold p-3.5 rounded-xl text-center animate-shake">
              {error}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="space-y-5 mt-4">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-wider block">Full Name Literal</label>
              <div className="relative">
                <input 
                  type="text" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full bg-gray-50 text-gray-800 pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200/60 focus:outline-none focus:border-amber-500 focus:bg-white transition text-sm font-semibold" 
                  placeholder="Shruti Sinha" 
                />
                <User className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-wider block">Network Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full bg-gray-50 text-gray-800 pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200/60 focus:outline-none focus:border-amber-500 focus:bg-white transition text-sm font-semibold" 
                  placeholder="shruti@domain.com" 
                />
                <Mail className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-wider block">Encryption Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full bg-gray-50 text-gray-800 pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200/60 focus:outline-none focus:border-amber-500 focus:bg-white transition text-sm font-semibold" 
                  placeholder="••••••••" 
                />
                <Lock className="absolute left-4 top-4 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full inline-flex items-center justify-center space-x-2 bg-amber-500 text-white py-4 rounded-2xl font-bold hover:bg-amber-600 shadow-lg shadow-amber-500/20 transition transform active:scale-95 duration-200 disabled:bg-gray-400"
            >
              <UserPlus className="w-4 h-4" />
              <span>{loading ? 'Compiling Parameters...' : 'Deploy Global Profile'}</span>
            </button>
          </form>

          <p className="text-xs font-bold text-gray-400 text-center mt-8 uppercase tracking-wider">
            Already authenticated?{' '}
            <Link to="/login" className="text-amber-500 hover:underline">Link Terminal</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;