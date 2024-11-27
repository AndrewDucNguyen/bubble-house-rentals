import React from 'react'
import heroImage from '../assets/images/hero_image.jpg'

const Hero = () => {
    return (
        <div className='w-full h-[35rem] bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-end mb-10'>
            <div className='bg-white max-w-xl w-full h-auto text-center'>
                <div className='w-full h-[6px] mt-2 mb-4 bg-[#C5B8A8]'></div>
                <div className='my-5'>
                    <h1 className='uppercase text-sm font-montserrat tracking-wider text-[#4E4E4E]'>welcome</h1>
                </div>
                <p className='font-libre italic leading-8 tracking-wider text-xl px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem impedit hic vitae illum mollitia deleniti sint adipisci, </p>
            </div>
        </div>
    )
}

export default Hero