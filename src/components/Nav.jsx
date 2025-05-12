'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { AlignJustify, X } from 'lucide-react'

import logo from '../assets/logo.svg'

const navigation = [
    { name: 'Features', href: 'features' },
    { name: 'Services', href: 'services' },
    { name: 'Process', href: 'process' },
    { name: 'Contact', href: 'contact' },
]

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <header>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center md:justify-between p-6 relative">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        alt="Bubble House Rentals Logo"
                        src={logo}
                        className="w-52 h-auto"
                    />
                </a>
                <div className="flex md:hidden absolute right-5">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <AlignJustify />
                    </button>
                </div>
                <div className="hidden md:flex md:gap-x-12">
                    {navigation.map((item) => (
                        <button key={item.name} type="button" onClick={() => scrollToSection(item.href)} className="text-sm/6 font-semibold text-gray-900">
                            {item.name}
                        </button>
                    ))}
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">The Bubble House Rentals</span>
                            <img
                                alt="Bubble House Rentals Logo"
                                src={logo}
                                className="w-52 h-auto"
                            />
                        </a>
                        <div className='absolute right-5'>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <X />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => scrollToSection(item.href)}
                                        className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Nav