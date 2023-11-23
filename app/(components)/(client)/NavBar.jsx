"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { APPOINTMENTS, BOOK_NOW, DASHBOARD_HOME, PROFILE, SERVICES } from '../store/routes'
// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const NavbarClient = () => {

    // const [session, setSession] = useState(null);

    // useEffect(() => {
    //     const fecthSession = async () => {
    //         try {
    //             const fetchedSession = await getServerSession(authOptions);
    //             setSession(fetchedSession);
    //             console.log({ fecthSession });
    //         } catch (error) {
    //             console.error('Error fetching session: ', error);
    //         }
    //     };

    //     fecthSession();

    // }, []);

    // console.log({session})

    const [showMenu, setShowMenu] = useState(false);

    const LINKS = [
        DASHBOARD_HOME,
        PROFILE,
        SERVICES,
        APPOINTMENTS,
    ]

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='bg-gradient-to-r from-teal-600 to-blue-700 px-4 md:px-20 flex justify-between items-center py-2'>
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
                    <Link key={id} href={link?.link} className='text-slate-300 hover:text-white mr-9'>{link?.title}</Link>
                ))}
                                <Link href={BOOK_NOW?.link} className='text-blue-700 bg-slate-50 px-2 rounded-full hover:text-blue-700 font-bold text-[19px] p-3'>Book Now</Link>
                <button onClick={() => signOut()} className='text-slate-300 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </button>
            </div>
            
        </nav>  
    )
}

export default NavbarClient;

