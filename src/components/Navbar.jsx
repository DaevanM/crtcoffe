import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
            <h1 className='w-full text-5xl font-bold'>Crt</h1>
            <ul className='hidden md:flex text-xl gap-4'>
                <li className='p-4 hover:text-[#ff9a18]'><a href="#Home">Home</a></li>
                <li className='p-4 hover:text-[#ff9a18]'><a href="#About">About</a></li>
                <li className='p-4 hover:text-[#ff9a18]'><a href="#Coffe">Coffe</a></li>
                <li className='p-4 hover:text-[#ff9a18]'><a href="#Variant">Variant</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? < AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 'fixed right-[100%]'}>
                <h1 className='w-full text-3xl font-bold m-4'>Crt</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 hover:text-[#ff9a18]'><a href="#Home">Home</a></li>
                    <li className='p-4 hover:text-[#ff9a18]'><a href="#About">About</a></li>
                    <li className='p-4 hover:text-[#ff9a18]'><a href="#Coffe">Coffe</a></li>
                    <li className='p-4 hover:text-[#ff9a18]'><a href="#Variant">Variant</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar