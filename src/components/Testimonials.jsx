import React from 'react'

import {testimonials} from '../data'
import TestimonialSlider from './TestimonialSlider'


const Testimonials = () => {
    const {title, paragraph} = testimonials
  return (
    <div className='container mx-auto'>
        <div>
            <h1 className='text-[25px] font-semibold'>{title}</h1>
            <p className='text-[18px]'>{paragraph}</p>

            <div className='w-[18.5rem] lg:w-auto md:w-auto mx-auto ' >
              <TestimonialSlider/>
            </div>  
        </div>      
    </div>
  )
}

export default Testimonials