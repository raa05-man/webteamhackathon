'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from './action';

export default function LoginForm() {
  const [form, setForm] = useState({ flatNo: '', password: '' });
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    startTransition(async () => {
      try {
        await loginUser(form.flatNo, form.password);
        router.push('/resident/home');
      } catch (err: any) {
        alert(err.message || 'Data not found');
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


  <form
    onSubmit={handleLogin}
    className="relative z-10 max-w-md mx-auto  p-6 bg-opacity-95 shadow-xl rounded space-y-4"
  >
    <h1 className="text-3xl font-bold text-center text-white">Login</h1>

    <input
      type="text"
      placeholder="Flat Number"
      className="w-full p-2 border rounded text-white"
      value={form.flatNo}
      onChange={(e) => setForm({ ...form, flatNo: e.target.value })}
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full p-2 border rounded text-white"
      value={form.password}
      onChange={(e) => setForm({ ...form, password: e.target.value })}
    />

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      disabled={isPending}
    >
      {isPending ? 'Logging in...' : 'Login'}
    </button>
  </form>
</div>

  );
}