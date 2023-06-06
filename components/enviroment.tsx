import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/image/lined.svg'

function EnviromentComponent() {
  return (
    <div>
        <div className='my-10'>
            <h1 className='text-3xl font-bold mx-7'>Students at the heart</h1>
            <h1  className='text-3xl font-bold mx-7 py-2'>of everything we do</h1>
            <Image
          src={logo}
          alt="Picture of the author"
          width={200}
          height={60} className="bg-contain ml-20 "
        /> 
                
        </div>
        <nav className='my-10'>
            <ul className='flex items-start flex-row flex-wrap py-10 mx-3'>
                <li>
                <Link href="" className='rounded-full text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-700 px-5 py-3 text-white'>Students</Link>
                </li>
                <li>
                <Link href="" className='rounded-full text-lg shadow-sm  px-5 py-3 mx-5 border border-gray-200'>Partners</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default EnviromentComponent