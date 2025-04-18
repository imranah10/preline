import React from 'react'
import { reviewdata } from './reviewdata'

export const ReviewCard = () => {
  return (
   <>
    <div className='mt-6 p-6 flex justify-around rounded-xl  border border-gray-300 bg-gradient-to-b from-[#171717] via-[#181717] to-[#171718] '>
        {
            reviewdata.map((items,index)=>{
                return(
                    <div>
                        <img className='w-12 rounded-xl bg-[#FFFF00]' src={items.image} alt={items.desc} />
                        <h2 className='text-3xl text-white'>{items.partners}</h2>
                        <p className='text-gray-400'>{items.title}</p>
                    </div>
                )
            })
        }
    </div>
   </>
  )
}
