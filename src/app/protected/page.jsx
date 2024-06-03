'use client';
import { useRouter } from 'next/navigation';

// pages/protected.js
const ProtectedPage = () => {
      const router = useRouter();
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <button onClick={() => router.push('/logout')}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
