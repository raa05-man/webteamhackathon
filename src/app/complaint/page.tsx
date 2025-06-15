import React from 'react'
import QrCodeGenerator from "../components/QrCodeGenerator";
import Link from 'next/link'
import Button from '@mui/material/Button';
function responsenewcomplaint() {
  return (
   
         <div className="relative w-full h-screen">
            <img
    src="/images/homepagebg.jpg"
    alt="homepagebg"
    className="absolute inset-0 w-full h-full object-cover rounded-xl"/>
    
  <div className="absolute inset-0  bg-opacity-50"></div>
     <div className="relative z-10 max-w-md mx-auto  p-6 bg-opacity-95 shadow-xl rounded space-y-4">
      <h1 className='text-3xl text-white uppercase font-bold'>Your Response is submitted with your flat number as a unique code </h1>
      <QrCodeGenerator/>
      <Link href="/resident/home" className='ml-38 w-[120px] text-sm md:text-base'> <Button variant="outlined" >HOME</Button></Link>
    </div>
    </div>
  )
}

export default responsenewcomplaint