import React from 'react'

const About = () => {
    return (
        <div className='w-full h-full border-t border-[#040404]/20 relative'>
            <div className='absolute bg-[#E7D9CE] w-36 mx-auto left-0 right-0 text-center top-[-12px]'>
                <h1 className='uppercase text-white font-montserrat text-sm py-[2px] tracking-wider'>Intro</h1>
            </div>
            <div className='max-w-7xl w-full h-full mx-auto flex justify-center items-center my-10'>
                <div className='w-full flex justify-center'>
                    <div className='w-5/12 flex justify-end'>
                        <img className="w-96 h-auto" src="src/assets/images/couple.jpg" alt="" />
                    </div>
                    <div className='max-w-lg w-7/12 px-10 flex flex-col justify-center'>
                        <h1 className='py-4 font-libre italic text-2xl tracking-wide text-[#4E4E4E]'>We're The Bubble House Rentals</h1>
                        <p className='font-libre tracking-wide leading-7 text-sm text-[#4E4E4E]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit mollitia vel dolore repellat eveniet minus beatae rem inventore provident molestiae harum aspernatur perferendis facere excepturi cumque, ratione odit! Ipsam.
                            Officia quaerat voluptas libero vero, ut accusamus nostrum eum deserunt architecto iure ea.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About