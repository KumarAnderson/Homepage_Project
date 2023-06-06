import React from 'react'
import Image from 'next/image';
import logo from "@/assets/image/edvoy.png";

function Content() {
  return (
    <div className='px-10 py-7 rounded-xl'>
      <div className='mx-10 my-1'></div>
         <Image
          src={logo}
          alt="Picture of the author"
          width={5000}
          height={60} className="bg-contain rounded-3xl my-7"
        />
        <div className='flex justify-center text-3xl font-bold py-10'>
          <h1>How it works</h1>
          </div>
    </div>
  )
}

export default Content