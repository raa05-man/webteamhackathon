'use server';

import { prisma } from '@/prisma';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

export async function signupUser(flatNo: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
await prisma.user.create({
  data: {
    flatNo,
    flatName: flatNo, 
    password: hashedPassword,
  },
});

  redirect('/resident/home');
}