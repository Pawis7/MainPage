import React from 'react'

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
            <div className='col-span-5'></div>
        </div>
    </section>
    
  )
}

export default HeroSection