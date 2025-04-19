import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Contactus = () => {
  return (
    <>
        <div className='max-w-5xl mx-auto my-8'>
        <div>
            <h1 className='font-semibold text-4xl text-white'> Contact Us </h1>
            <p className='text-gray-400'>Whatever your goal - we will get you there.</p>
        </div>

    <div className='grid grid-cols-2'>
       <div className=' space-y-4 mt-14'>
       <div className='flex gap-x-2 my-4'>
           <div className='text-white text-3xl'>
           <IoLocationSharp />
           </div>
           <div>
            <h3 className='font-semibold text-white text-[1rem]'>Our address</h3>
          <div className='text-gray-400'>
          <p>300 Bath Street, Tay House
            </p>
            <p>Glasgow G2 4JR, United Kingdom</p>
          </div>
            </div> 
        </div>

        <div className='flex gap-x-2 my-4'>
           <div className='text-white text-3xl'>
           <MdOutlineMailOutline />
           </div>
           <div>
            <h3 className='font-semibold text-white text-[1rem]'>Email us:</h3>
          <div className='text-gray-400'>
            <p>hello@example.com</p>
          </div>
            </div> 
        </div>
        <div className='flex gap-x-2 my-4'>
           <div className='text-white text-3xl'>
           <MdOutlineMailOutline />
           </div>
           <div>
  <h3 className="font-semibold text-white text-[1rem]">We are hiring</h3>
  <div className="text-gray-400">
    <p>
      We're thrilled to announce that we're expanding our team and looking for
      talented individuals like you to join us.
    </p>

    {/* Wrapping h4 and arrow in a group */}
    <div className="flex items-center gap-x-2 group cursor-pointer">
      <TfiAnnouncement className="text-[#FFFF00]" />
      <h4 className="hover:underline text-[#FFFF00] transition duration-300">
        Job openings
      </h4>
      <span className="text-[#FFFF00] transform transition-transform duration-300 group-hover:translate-x-1">
        <MdOutlineArrowRightAlt />
      </span>
    </div>
  </div>
</div>

        </div>
       </div>
        <div>
            <form className='grid grid-cols-1 py-2 space-y-3'>
                <input className='outline-none p-4 bg-gray-700 text-gray-300 rounded-2xl' type="text" placeholder='Name'required />
                <input className='outline-none p-4 bg-gray-700 text-gray-300 rounded-2xl' type="email" placeholder='Email'required />
                <input className='outline-none p-4 bg-gray-700 text-gray-300 rounded-2xl' type="text" placeholder='Company'required/>
                <input className='outline-none p-4 bg-gray-700 text-gray-300 rounded-2xl' type="number"placeholder='Phone'required />
                <textarea className='pl-4 pt-2 outline-none h-20 bg-gray-700 text-gray-300 rounded' placeholder='Tell us about your project'required />
                <p className='text-gray-400 text-xs'>All fields are required</p>
                <button type='submit' className='hover:bg-yellow-400 cursor-pointer bg-[#FFFF00]  p-1 px-5 rounded-3xl'>Submit</button>
            </form>
        </div>

    </div>


        </div>
    </>
  )
}
