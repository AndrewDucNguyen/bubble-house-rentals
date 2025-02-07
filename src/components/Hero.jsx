import { useState } from 'react'

const Hero = () => {

    return (
        <div className="relative max-w-7xl mx-auto">
            <div
                aria-hidden="true"
                className="absolute w-full h-full -z-10 overflow-hidden blur-xs"
            >
                <img className='w-full h-full object-cover object-center rounded-2xl' src='./src/assets/images/hero.png' />
            </div>
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-wide text-balance sm:text-7xl">
                        Where Fun Meets Elegance
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        At The Bubble House Rentals, we offer modern white castle bouncy houses that bring a touch of class and endless joy to your celebrations.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Book Now
                        </a>
                        <a href="#features" className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero