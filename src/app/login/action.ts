'use server';

import { prisma } from '@/prisma';
   import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

export async function loginUser(flatNo: string, password: string) {
          const user = await prisma.user.findUnique({ where: { flatNo } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
                   throw new Error('Data not found or invalid credentials');
  }

   redirect('/resident/home');
}