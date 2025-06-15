'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { signupUser } from './action';

export default function SignUpForm() {
  const [form, setForm] = useState({ flatNo: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.flatNo || !form.password || !form.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    startTransition(async () => {
      try {
        await signupUser(form.flatNo, form.password);
        router.push('/home');
      } catch (err: any) {
        setError(err.message);
      }
    });
  };

  return (
    <div className="relative w-full h-screen">
      <img
    src="/images/homepagebg.jpg"
    alt="homepagebg"
    className="absolute inset-0 w-full h-full object-cover rounded-xl"
  />
  <div className="absolute inset-0  bg-opacity-50"></div>
    <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto  p-6 bg-opacity-95 shadow-xl rounded space-y-4">
      <h1 className="text-2xl font-bold text-center  text-white">Sign Up</h1>

      <input
        type="text"
        placeholder="Flat Number"
        className="w-full p-2 border rounded  text-white"
        value={form.flatNo}
        onChange={(e) => setForm({ ...form, flatNo: e.target.value })}
      />
      <input
        type="password"
        placeholder="New Password"
        className="w-full p-2 border rounded  text-white"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 border rounded  text-white"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={isPending}>
        {isPending ? 'Registering...' : 'Register'}
      </button>
    </form>
    
    
    
    </div>
  );
}