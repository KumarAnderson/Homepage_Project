import React from 'react'
import Image from 'next/image'
import logo from '@/assets/image/canada.jpg'
import ireland from '@/assets/image/ireland.jpg'
import newzealand from '@/assets/image/newzealand.jpg'
import brighton from '@/assets/image/Uob.jpg'
import roehampton from '@/assets/image/Uor.jpg'
import coventry from '@/assets/image/Cv.jpg'
import { Linden_Hill } from 'next/font/google'
import Link from 'next/link'

function UnivercitysComponent() {
  return (
    <div className='my-10 mx-5 py-10'>
        <div>
            <div className='text-4xl font-bold'>Explore Top Study Destinations</div>
            <div className='text-2xl my-7'>We’re partnered with over 120 world class education providers in 5 countries</div>
        </div>
        <div className='flex justify-center'>
        <Image
          src={logo}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
          
        />
           <Image
          src={ireland}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
           <Image
          src={newzealand}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
        </div>
        <div className='my-10 mx-2 py-10    '>
        <div>
            <div className='text-4xl font-bold'>Discover Top Universities</div>
            <div className='text-2xl my-7'>We’re partnered with over 120 world class education providers</div>
        </div>
        <div className='flex justify-center'>
        <Image
          src={brighton}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
        <Image
          src={roehampton}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
        <Image
          src={coventry}
          alt="Picture of the author"
          width={800}
          height={100}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
        </div>
        
        </div>
    </div>

  )
}

export default UnivercitysComponent