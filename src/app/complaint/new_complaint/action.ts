'use server';

import { prisma } from '@/prisma';

export async function submitComplaint({ flatNo, category, description, imageUrl }: {
  flatNo: string;
  category: string;
  description: string;
  imageUrl: string;
}) {
  await prisma.complaint.create({
    data: {
      flatNo,
      category,
      description,
      imageUrl,
    },
  });
}