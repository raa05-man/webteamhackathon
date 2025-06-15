'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitComplaint } from './action';

export default function NewComplaintForm() {
  const [form, setForm] = useState({
    flatNo: '',
    category: 'Maintenance',
    description: '',
    imageUrl: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitComplaint(form);
    router.push('/complaint');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-orange-50 shadow-lg rounded-xl space-y-4">
      <h1 className="text-xl font-bold text-center text-blue-600 underline">COMPLAIN HERE</h1>

      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full border p-2 rounded">
        <option value="Maintenance">Maintenance</option>
        <option value="Electrical">Electrical</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Furniture">Furniture</option>
      </select>

      <input
        type="text"
        placeholder="Flat Number"
        value={form.flatNo}
        onChange={(e) => setForm({ ...form, flatNo: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        rows={3}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
  );
}