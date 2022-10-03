import React from 'react'
import Heroimage from '../images/Heroimage.svg'
import Rectangle from '../images/Rectangle 5.png'

const Hero = () => {
  return (
    <div className='container mt-24 mx-auto'>
        <div className='flex flex-col items-center lg:flex-row lg:gap-[15.7rem]'>
            <div>
                <h1 className='text-[30px] lg:-mt-16 lg:text-[48px] font-semibold lg:w-[518px]'>Simplified and <span className='text-primary'>Assessible</span> Healthcare for you an your Family</h1>
            </div>
            <div className='relative mt-10'>
                <img src={Heroimage} className='lg:w-[395px] w-[285px] -z-10 lg:mt-[-4rem]' alt="" />
                <img src={Rectangle} alt='rectangle' className='absolute  lg:-my-[5rem] -z-10'/>
            </div>
        </div>
    </div>
  )
}

export default Hero