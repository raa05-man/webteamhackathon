
import Button from '@mui/material/Button';
import Link from "next/link";
export default function Home() {
  return (
   <>
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10 px-4 py-10 md:py-20 bg-black">

        <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl gap-10">
           <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="uppercase text-3xl md:text-5xl font-bold leading-snug text-white">Welcome to GOKULDHAM  -
                              A Safe, Connected, and Thriving Community You Can Call Home</h1>    
           </div>
           <div className="w-full  md:w-1/2 flex items-center justify-center relative"> 
                <div className="absolute w-[250px] h-[200px] md:w-[450px] md:h-[350px] bg-[#FB37FF] rounded-full blur-3xl opacity-50"></div>
                <img src="/images/gokuldhamimg.jpg" alt="Gokuldham"className="relative z-10 w-[250px] md:w-[450px] rounded-xl shadow-xl object-contain 
                         transition-transform duration-500 hover:scale-105 "/>
           </div>           
        </div> 
                <Link href="/prelogin"><Button variant="outlined"className="px-6 py-3 text-sm md:text-base" >Enter</Button></Link>
    </div>


    
   </>
  );
}