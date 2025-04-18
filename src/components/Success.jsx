import React from 'react'
import { SuccCard } from './SuccCard'

export const Success = () => {
  return (
    <>
        <div className='max-w-5xl mx-auto mt-12 space-y-3  '>
            <div className='space-y-3 w-3xl'>
                <h2 className='text-white text-3xl font-semibold'>
                Success stories
                </h2>
                <p className='text-gray-300'>
                Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.
                </p>
                
            </div>
            <SuccCard/>
           
        </div>
    </>
  )
}
