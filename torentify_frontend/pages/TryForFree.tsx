
import React from 'react';
import { Link } from 'react-router-dom';

const TryForFree: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Create Account</h1>
          <p className="text-gray-500 dark:text-gray-400">Start your journey to a dream remote job today.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">First Name</label>
              <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" placeholder="Jane" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Last Name</label>
              <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Email</label>
            <input type="email" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" placeholder="jane@example.com" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">Password</label>
            <input type="password" title="Minimum 8 characters" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all" placeholder="Create a password" />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="terms" className="text-xs text-gray-500 dark:text-gray-400">
              I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </label>
          </div>
          
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all transform active:scale-[0.98] mt-4">
            Get Started for Free
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
          Already using Torientify? <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default TryForFree;
