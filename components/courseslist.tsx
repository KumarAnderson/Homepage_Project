import Link from 'next/link'
import React from 'react'

function CourseslistComponent() {
  return (
    <div>
      <div className='mb-10 py-10 mt-32'>
        <div className=' flex w-full justify-between'>
        <div className='font-bold text-4xl mx-5'>We'll help you find the right courses</div>
        <Link href="">
        <div className='flex justify-end mr-10 my-2 text-xl text-purple-700 font-semibold'>See all popular subjects</div>
        </Link>
    
        </div>

    <div className='font-sans text-2xl mx-5 mt-3 py-2'>Search from over 57610 courses by subject or university</div>
    </div>

 <div className='my-10'>
    <ul className='flex items-start flex-row flex-wrap gap-x-8 px-8 gap-y-10 '>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border hover:text-red-400 border-gray-200 ">Computer Sciences</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Artificial Intelligence</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Business</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Cyber Security</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400 border-gray-200  ">Health care</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Data Sciences and Big Data</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Finance</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400 border-gray-200  ">Emergency Medicine</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400  border-gray-200 ">Business Administration</Link>
        </li>
        <li>
        <Link href="" className="rounded-full overflow-hidden shadow-sm px-5 py-3 border  hover:text-red-400     border-gray-200  ">Engineering And Technology</Link>
        </li>
    </ul>
 </div>

    </div>   
    
  )
}

export default CourseslistComponent