
import Link from 'next/link'
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
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
            <Link href="/complaint/new_complaint"><Button variant="outlined"className="w-[160px] text-sm md:text-base" >New Complaint</Button></Link>
            <Link href="/"><Button variant="contained"className="w-[120px] text-sm md:text-base" >logout</Button></Link>
            </div>
            </div>
      </div>
       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center px-6'>
               <h1  className='text-2xl md:text-4xl lg:text-5xl  font-bold leading-snug'><span>Welcome to GOKULDHAM — your official portal for seamless community engagement and services
                                         </span></h1>
      </div>
      
     </div>
         <div className="flex flex-col md:flex-row w-full px-6 py-10 gap-6">
      
  
      <div className="w-full md:w-[40%] mt-25">
        <h1 className="text-2xl md:text-4xl font-bold">What they are telling </h1>
        <h1 className="text-2xl md:text-4xl font-bold">about us</h1>
      </div>

 
      <div className="w-full md:w-[60%] flex flex-col gap-8">
        
      
        <div className="bg-gray-100 p-4 rounded-xl shadow">
          <p className="mb-2">
            
            Everything we wanted in a facility management software is present in GOKULDHAM - easy to use, detailed tracking, and more.
          </p>
               <div className="flex items-center text-gray-700 font-medium mt-2">
            <PersonIcon className="mr-2" />
                    <p className='font-bold text-2xl'>Raman</p> 
          </div>
        </div>

     
        <div className="bg-gray-100 p-4 rounded-xl shadow">
          <p className="mb-2">
            We tried 2–3 solutions before shifting to GOKULDHAM society, and must admit, our work has never been easier before.
          </p>
          <div className="flex items-center text-gray-700 font-medium mt-2">
            <PersonIcon className="mr-2" />
              <p className='font-bold text-2xl'>Raman</p> 
          </div>
        </div>

      </div>
    </div>
      <div>
          <p className='font-bold text-4xl ml-150'>Contact</p> 
           <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
       noValidate
       autoComplete="off"
       className=' grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 ml-80 '
    >
       
      <Input placeholder="Name" inputProps={ariaLabel} className="w-[150px] "  />
      <Input placeholder="Phone Number" inputProps={ariaLabel}  className="w-[150px]"   />
      <Input  placeholder="Email Adress" inputProps={ariaLabel}  className="w-[150px]" />
      <Input  placeholder="Your Message"  inputProps={ariaLabel}  className="w-[150px]" />
    </Box>
     <div className=" flex  justify-center bg-white">
              <Link href="/home/contactsubmit">
    <Button variant="contained" className="px-6 py-3 text-sm md:text-base">
      Submit here
    </Button>
     </Link>
  
     </div>
      </div>
      <br/>
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