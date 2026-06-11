import React, { useState, useEffect, useContext } from 'react';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';
import { getProfile } from '../api/authApi';
import { AuthContext } from '../context/AuthContext';
import { User, Shield, Terminal, Key } from 'lucide-react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    getProfile()
      .then(setProfileData)
      .catch(err => console.error("Identity extraction block failed", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <MainLayout><Loader /></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-8 py-4">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border flex flex-col md:flex-row items-center gap-6 shadow-inner">
          <div className="w-20 h-20 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
            <User className="w-10 h-10" />
          </div>
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-black text-gray-950">{profileData?.name || 'Snack Client'}</h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{profileData?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border space-y-3 shadow-sm">
            <div className="flex items-center space-x-2 text-amber-600 font-black text-sm uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Permission Node</span>
            </div>
            <p className="text-sm font-bold text-gray-700">
              Account State Level: {profileData?.isAdmin ? (
                <span className="text-green-600 bg-green-50 px-2.5 py-1 rounded-lg border border-green-200">System Admin Core</span>
              ) : (
                <span className="text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg border">Standard Consumer Terminal</span>
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border space-y-3 shadow-sm">
            <div className="flex items-center space-x-2 text-gray-500 font-black text-sm uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>System Actions</span>
            </div>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-50 text-red-500 border border-red-100 font-bold rounded-xl text-xs hover:bg-red-500 hover:text-white transition active:scale-95 duration-200"
            >
              Terminate Session Logs
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;