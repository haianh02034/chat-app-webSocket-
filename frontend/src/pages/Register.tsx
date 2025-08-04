import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import authApi from '../api/auth';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authApi.post('/register', {
        username,
        email,
        password
      });

      alert('✅ Đăng ký thành công!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err: any) {
      alert('❌ Lỗi đăng ký: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url("/login1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full space-y-8 p-8 bg-[#1A202C] rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 relative inline-block">
            Chat
          </h1>
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

        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="new-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              SIGN UP
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-teal-400 hover:text-teal-300">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
