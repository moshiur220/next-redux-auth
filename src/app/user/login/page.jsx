'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login', { username, password }, { withCredentials: true });
      console.log('Login Response:', res);

      if (res.data.success) {
        console.log('Token:', res.data.data.token);
        localStorage.setItem('token', res.data.data.token);
        Cookies.set('token', res.data.data.token, { expires: 1 });
        router.push('/protected');
      } else {
        console.log('Login Failed:', res.data.message);
        setError(res.data.message || 'Login failed');
      }
    } catch (error) {
      console.log('Error:', error);
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm text-black focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow-sm text-black focus:ring focus:ring-indigo-200"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
