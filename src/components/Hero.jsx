import React from 'react'
import Image from 'next/image'
import { CiUser } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";

const Hero = () => {
  return (
    <>
     <div className='relative w-full h-full'>

      {/* Image  */}
      <div className='absolute top-0 w-full '>
       <Image
        src="/Assets/background.jpg"
        width={500}
        height={500}
        style={{objectFit:"cover"}}
        className='h-96 w-full '
        alt="Picture of the author"
      />
      </div>

      {/* profile image  */}

      <div className='absolute border-2 h-64 w-64  top-[177px] z-30 left-10 rounded-full p-4 bg-white'>
      <CiUser size={220} className='bg-slate-500 rounded-full'/>
      </div>

      {/* camera icon */}
      <div className='absolute z-50 left-[259px] top-[365px]'>
      <FaCamera size={30}/>
      </div>
     </div> 
    </>
  )
}

export default Hero
