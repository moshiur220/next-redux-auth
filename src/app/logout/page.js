'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove the token from localStorage and cookies
    localStorage.removeItem('token');
    Cookies.remove('token');
    
    // Redirect to the login page
    router.push('/user/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Logging out...</h1>
      </div>
    </div>
  );
};

export default Logout;
