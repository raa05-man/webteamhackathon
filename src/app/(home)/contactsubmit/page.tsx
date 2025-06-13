import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button';
function page() {
  return (
    <>
    <img src="/images/homepagebg.jpg" alt="homepagebg" className='w-full h-full object-cover rounded-xl shadow-xl '/>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6'>
      <h1 className='text-white text-2xl md:text-4xl font-bold leading-relaxed shadow-md'>Thanking YOU FOR VISITING US!! WE WILL CONTACT YOU SOON 
        ,PLEASE ENSURE YOU FILLED ALL DETAIL AND CORRECTLY</h1>
        <Link href="/home"><Button variant="contained"className="px-6 py-3 text-sm md:text-base" >HOME</Button></Link>
     </div>

    </>
  )

}

export default page