import React from 'react'
import Image from 'next/image'
import logo from '@/assets/image/Findimage.png'
import apply from '@/assets/image/apply.png'
import chat from '@/assets/image/chat.png'

function DasboardComponent() {
  return (
    <div className='flex justify-center mt-7 mx-10 my-7'>
       <div className='flex-shrink'>
       <Image
          src={logo}
          alt="Picture of the author"
          width={30}
          height={20}
          className="bg-contain rounded-xl ml-7 my-3 "
        />
       </div>
        <div className='mx-10 px-3'>
            <div className='font-bold text-xl '>Find courses</div>
            <div className='py-3'>Browse the top courses from over 120 universities worldwide</div>
        </div>
      <div className='flex-shrink'>
      <Image
          src={apply}
          alt="Picture of the author"
          width={30}
          height={20}
          className="bg-contain rounded-xl ml-7 my-3"
          />
      </div>
        <div className='mx-10 px-3'>
            <div className='font-bold text-xl'>Apply and receive offers</div>
            <div className='py-3'>Instantly apply, upload academic documents and receive offers</div>
        </div>
        <div className='flex-shrink'>
        <Image
          src={chat}
          alt="Picture of the author"
          width={30}
          height={20}
          className="bg-contain rounded-xl mxl-7 my-3"
          />
        </div>
        <div className='mx-10 px-3'>
            <div className='font-bold text-xl'>chat with us</div>
            <div className='py-3'>Chat with us to receive free expert advise from our friendly advisors</div>
        </div>
    </div>
  )
}

export default DasboardComponent