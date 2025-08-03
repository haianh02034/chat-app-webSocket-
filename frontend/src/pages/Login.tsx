import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url("/login1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full space-y-8 p-8 bg-[#1A202C] rounded-lg shadow-lg">
        <div className="text-center">
          {/* "Template" Logo */}
          <h1 className="text-4xl font-bold mb-8 relative inline-block">
            Chat
            
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-gray-700">
              Fb
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-gray-700">
              G
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-gray-700">
              in
            </a>
          </div>
          <p className="text-sm text-gray-400 mb-6">or use your email account</p>
        </div>

        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div className="text-sm text-right">
            <Link to="#" className="font-medium text-teal-400 hover:text-teal-300">
              Forgot your password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
