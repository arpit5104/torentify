
import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Torientify</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back!</h1>
          <p className="text-gray-500 dark:text-gray-400">Please enter your details to sign in.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" 
              placeholder="name@company.com" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Password</label>
              <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" 
              placeholder="••••••••" 
            />
          </div>
          
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all transform active:scale-[0.98]">
            Sign In
          </button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200 dark:border-gray-800"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-gray-900 px-2 text-gray-500">Or continue with</span></div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <button className="flex justify-center items-center py-3 border dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
          </button>
          <button className="flex justify-center items-center py-3 border dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5 dark:invert" alt="Github" />
          </button>
          <button className="flex justify-center items-center py-3 border dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account? <Link to="/try-for-free" className="font-bold text-blue-600 hover:underline">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
