
import { prisma } from '@/prisma';
import { revalidatePath } from 'next/cache';
import Link from 'next/link'
import Button from '@mui/material/Button';
const workerXPMap = {
  Maintenance: { name: 'Worker1', xp: 20 },
  Electrical: { name: 'Worker2', xp: 15},
  Plumbing: { name: 'Worker3', xp: 10},
  Furniture: { name: 'Worker4', xp: 5 },
};


export async function completeComplaint(formData: FormData) {
  'use server';

  const id = Number(formData.get('id'));
  const category = String(formData.get('category'));

  const worker = workerXPMap[category as keyof typeof workerXPMap];
  if (worker) {
    await prisma.workerXP.upsert({
      where: { name: worker.name },
      update: { xp: { increment: worker.xp } },
      create: { name: worker.name, role: category, xp: worker.xp },
    });
  }

  await prisma.complaint.delete({ where: { id } });
  revalidatePath('/worker_dashboard');
}

export default async function WorkerDashboard() {
  const complaints = await prisma.complaint.findMany({
    where: { status: 'assigned' },
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
      <h1 className="text-5xl ml-40 font-bold text-white">Worker Dashboard</h1>
 
                  <div className="grid grid-cols-2 ml-40  gap-20">
        {['Worker1', 'Worker2', 'Worker3', 'Worker4'].map((name) => (
          <div key={name} className="p-4 rounded shadow">
            <p className="font-semibold text-3xl">{name}</p>
                               <p className='text-2xl'><WorkerXP  name={name} /></p>
          </div>
        ))}
        </div>

      {complaints.map((comp) => (
        <div key={comp.id} className=" p-4 rounded shadow">
          <p><strong>Flat:</strong> {comp.flatNo}</p>
                       <p><strong>Category:</strong> {comp.category}</p>
          <p><strong>Description:</strong> {comp.description}</p>
          <form action={completeComplaint}>
            <input type="hidden" name="id" value={comp.id} />
                   <input type="hidden" name="category" value={comp.category} />
            <button className="mt-2 bg-red-600 text-white px-4 py-1 rounded">Mark as Done</button>
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


async function WorkerXP({ name }: { name: string }) {
              const record = await prisma.workerXP.findUnique({ where: { name } });
      return <p className="text-green-600">XP: {record?.xp ?? 0}</p>;
}