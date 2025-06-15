
import { prisma } from '@/prisma';
import { revalidatePath } from 'next/cache';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Button from '@mui/material/Button';

export async function assignToWorker(formData: FormData) {
  'use server';

  const id = Number(formData.get('id'));
  const category = String(formData.get('category'));

  await prisma.complaint.update({
    where: { id },
    data: { status: 'assigned' },
  });

  revalidatePath('/manager_dashboard');
}

export default async function ManagerDashboard() {
  const complaints = await prisma.complaint.findMany({
    where: { status: 'submitted' },
  });

  return (

   <div className="relative w-full min-h-screen">
  
  <img
    src="/images/homepagebg.jpg"
    alt="homepagebg"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

 
  <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 z-10"></div>


  <div className="relative z-20 p-6 max-w-3xl mx-auto space-y-6 text-white">
    <h1 className="text-3xl font-bold text-center underline">Manager Dashboard</h1>

    {complaints.map((comp) => (
      <div key={comp.id} className=" bg-opacity-90 p-4 rounded shadow text-white">
        <p><strong>Flat:</strong> {comp.flatNo}</p>
        <p><strong>Category:</strong> {comp.category}</p>
        <p><strong>Description:</strong> {comp.description}</p>
        
        <form action={assignToWorker}>
          <input type="hidden" name="id" value={comp.id} />
          <input type="hidden" name="category" value={comp.category} />
          <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
            Assign to Worker
          </button>
        </form>
      </div>
    ))}
    <div className="flex justify-center pt-4">
      <Link href="/home">
        <Button variant="outlined" className="w-[160px] text-sm md:text-base">
          Home
        </Button>
      </Link>
    </div>
  </div>
 
</div>

  );
}