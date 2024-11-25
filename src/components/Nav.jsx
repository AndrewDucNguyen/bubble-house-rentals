import React from 'react'

const Nav = () => {
    const navLinks = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About Us',
            url: '/'
        },
        {
            title: 'Rentals',
            url: '/'
        },
        {
            title: 'Contact Us',
            url: ''
        }
    ]

    return (
        <>
            <div className='w-full h-32 flex justify-center'>
                <div className='max-w-7xl w-full flex justify-center items-center'>
                    <div className='w-full flex justify-center'>
                        <h1>
                            Find us on
                        </h1>
                    </div>

                    <div className='w-full flex justify-center items-center border-x-[2px] h-14'>
                        The Bubble House Rentals
                    </div>

                    <div className='w-full flex justify-center'>
                        Lorem ipsum dolor sit amet consectetur!
                    </div>
                </div>
            </div>

            <nav className='w-full flex justify-center h-12 items-center border-t-2'>
                <ul className='max-w-xl w-full flex justify-between'>
                    {navLinks.map((navLink) => (
                        <li>{navLink.title}</li>
                    ))}

                </ul>
            </nav>
        </>
    )
}

export default Nav