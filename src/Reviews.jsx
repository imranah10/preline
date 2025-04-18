import React from 'react'
import reviewbg from './assets/images/review/reviewbg.avif'
import { ReviewCard } from './ReviewCard'

export const Reviews = () => {
  return (
   <>
    <div className='max-w-5xl mx-auto pt-20'>
        <div className='space-y-3 w-3xl my-3'>
            <h2 className='text-white text-3xl font-semibold'>Preline reviews</h2>
            <p className='text-gray-300'>
            With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.
            </p>
        </div>

        <div className='grid grid-cols-2 '>
            <div className='text-white space-y-3 pt-16'>
                <h2 className='font-semibold text-3xl'>
                To say that switching to Preline has been life-changing is an understatement. My business has tripled since then.
                </h2>
                <p className='font-semibold'>Nicole Grazioso
                </p>
                <p className='text-gray-300 text-xs'>Director Payments & Risk | Airbnb
                </p>
            </div>
            <div>
                <img src={reviewbg} className='rounded-xl' alt="clientimg" />
            </div>
        </div>
        {/* reviewcard  */}
        <ReviewCard/>
    </div>
   </>
  )
}
