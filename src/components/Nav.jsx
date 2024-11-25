import React from 'react'

const Nav = () => {
    const navLinks = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: ''
        }
    ]

    return (
        <>
            <div className='w-full h-32 bg-slate-300 flex justify-center'>
                <div className='max-w-7xl w-full flex justify-center items-center'>
                    <div className='w-full flex justify-center'>
                        <h1>
                            Find us on
                        </h1>
                    </div>

                    <div className='w-full flex justify-center items-center border-x-[1px] h-12'>
                        The Bubble House Rentals
                    </div>

                    <div className='w-full flex justify-center'>
                        Lorem ipsum dolor sit amet consectetur!
                    </div>
                </div>
            </div>

            <nav>
                <ul>
                    <li>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav