"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { APPOINTMENTS, BOOK_NOW, HOME, MY_PROFILE, SERVICES } from '../store/routes'

const LINKS = [
    HOME,
    MY_PROFILE,
    SERVICES,
    APPOINTMENTS
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className='bg-gradient-to-r from-teal-600 to-blue-700 px-4 md:px-20 flex justify-between items-center py-2'>
            <Link href="/" className='font-bold text-lg'>
                <Image
                    src="/logo.png"
                    alt="DentFix Logo"
                    width={150}
                    height={150}
                    className='mix-blend-screen'
                />
            </Link>
            <button
                onClick={toggleMenu}
                className={`text-slate-300 hover:text-white md:hidden ${showMenu ? 'hidden' : 'block'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <div className={`md:flex items-center gap-8 text-sm font-medium ${showMenu ? 'flex' : 'hidden'}`}>
                {LINKS.map((link, id) => (
                    <Link key={id} href={link?.link} className='text-slate-300 hover:text-white font-bold'>{link?.title}</Link>
                ))}

                <Link href={BOOK_NOW?.link} className='text-blue-700 bg-slate-50 px-2 rounded-full hover:text-blue-700 font-bold text-[19px] p-3'>Book Now</Link>

            </div>
        </div>
    )
}

export default Navbar;

