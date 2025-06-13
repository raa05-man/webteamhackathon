
import Button from '@mui/material/Button';
import Link from 'next/link'
import AddCallIcon from '@mui/icons-material/AddCall';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
const ariaLabel = { 'aria-label': 'description' };
function home1() {
       

  return (
     <>
     <div className=' relative w-full h-[700px]'> 
      <img src="/images/homepagebg.jpg" alt="homepagebg" className='w-full h-full object-cover rounded-xl shadow-xl '/>
      
      <div className='absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-6xl text-white z-20 flex-col items-center justify-center space-y-0 px-4  '>
           <div className='flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap gap-4'>
            <p className=' text-3xl md:text:5xl font-bold'>GOKULDHAM</p>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap gap-6'>
            <Link href="/new_complaints"><Button variant="outlined"className="w-[160px] text-sm md:text-base" >New Complaint</Button></Link>
            <Link href="/"><Button variant="outlined"className="w-[200px] text-sm md:text-base" >pending Complaint</Button></Link>
            <Link href="/prelogin"><Button variant="contained"className="w-[120px] text-sm md:text-base" >logout</Button></Link>
            </div>
            </div>
      </div>
       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center px-6'>
               <h1  className='text-2xl md:text-4xl lg:text-5xl  font-bold leading-snug'><span>Welcome to GOKULDHAM — your official portal for seamless community engagement and services
                                         </span></h1>
      </div>
      
     </div>
        
       <footer className="bg-neutral-900 h-auto py-8 px-4">
  <div className="flex flex-col md:flex-row justify-center gap-80 text-white">
    
  
    <div>
      <h2 className="text-2xl uppercase mb-2">Information</h2>
      <p><AddCallIcon className="mr-2" /> 7463028461</p>
      <p><MarkEmailReadIcon className="mr-2" /> GOKULDHAM@gmail.com</p>
    </div>

  
    <div>
      <h2 className="text-2xl uppercase mb-2">Links</h2>
   
      <p className="hover:underline cursor-pointer">Terms & Condition</p>
      <p className="hover:underline cursor-pointer">Web Privacy Policy </p>
      <p className="hover:underline cursor-pointer"> App Privacy Policy </p>
        <p className="hover:underline cursor-pointer"> Return & Refund Policy </p>
    </div>

  </div>

  <h2 className='text-white flex flex-col md:flex-row justify-center'>GOKULDHAM © 2008. All Rights Reserved.</h2>
</footer>
     </>
  )
}

export default home1