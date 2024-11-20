import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-12'> 
            <div className='col-span-7 place-self-center'>
                <h1 className= "text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    I´m Pawis!
                </h1>
                <p className='text-[#ffffff] text-lg'>
                    i´m making my first web site with webcoded tutorial
                </p>
            </div>
            <div className='col-span-5'>
                <div className='rounded-full bg-[#080808] w-[400px] h-[400px] relative'>
                    <Image
                        src="/images/hero.png"
                        alt='hero'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default HeroSection