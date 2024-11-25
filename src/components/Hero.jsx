import React from 'react'
import heroImage from '../assets/images/hero_image.jpg'

const Hero = () => {
    return (
        <div className='w-full h-[35rem] bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-end mb-10'>
            <div className='bg-white max-w-xl w-full h-48 px-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem impedit hic vitae illum mollitia deleniti sint adipisci, nesciunt incidunt blanditiis eligendi at cum voluptatem! Impedit ratione odio necessitatibus voluptate?</p>
            </div>
        </div>
    )
}

export default Hero