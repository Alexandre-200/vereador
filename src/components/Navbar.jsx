"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { LuFacebook } from "react-icons/lu";


export default function Navbar() {

    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header className="bg-blue-300 text-[#000000] w-full ease-in duration-300 fixed top-0 left-0 z-10" >
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">

                <div>
                    <Link href='/' onClick={handleSmallerScreenNavigation}>
                    <div className="text-white">
                        <p className="font-bold text-2xl md:text-2xl x:text-3xl uppercase">Almeida</p>
                        <p className="font-bold text-2xl md:text-2xl x:text-3xl uppercase">Agostinho 12345</p>
                    </div>
                        
                    </Link>
                </div>

                { /* large screens nav */}
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800 text-white">
                    <li className="mr-4 lg:mr-8 hover:text-[#000000]">
                        <Link href="/">início</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#000000]">
                        <Link href="propostas">propostas</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#000000]">
                        <Link href="comunidade">Gestão comunitária</Link>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#000000]">
                        <Link href="voluntariado">Voluntariado</Link>
                    </li>
                </ul>

                <div className="hidden md:flex">
                    <div className="flex gap-4">
                        <div className="bg-blue-500 rounded-full p-2 text-white  hover:text-black">
                            <Link href="/">
                                <LuFacebook size={35} />
                            </Link>
                        </div>
                        <div className="bg-purple-700 rounded-full p-2 text-white hover:text-black">
                            <Link href="/">
                                <AiOutlineInstagram size={35} />
                            </Link>
                        </div>
                        <div className="bg-green-500 rounded-full p-2 text-white hover:text-black">
                            <Link href="/">
                                <AiOutlineWhatsApp size={35} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* smaller screen*/}

                <div onClick={handleSmallerScreenNavigation} className="flex md:hidden text-white">
                    {menuIcon ? (<AiOutlineClose size={35} />) : (<AiOutlineMenu size={35} />)}
                </div>

                {/* smaller screen icons*/}

                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-blue-300 text-white ease-in duration-300' :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-blue-300 text-white text-center ease-in duration-300'}>

                    <ul onClick={handleSmallerScreenNavigation} className="uppercase font-bold text-2xl ">
                        <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-black cursor-pointer">
                            <Link href="/">início</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-5  hover:text-black cursor-pointer">
                            <Link href="/">propostas</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-black cursor-pointer">
                            <Link href="/about">Gestão comunitária</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-black cursor-pointer">
                            <Link href="/about">voluntariado</Link>
                        </li>
                        <li >
                            
                            <div className="flex gap-4 mt-3">

                                <div className="bg-blue-500 rounded-full p-2 text-white hover:text-black">
                                    <Link href="/">
                                        <LuFacebook size={35} />
                                    </Link>
                                </div>
                                <div className="bg-purple-700 rounded-full p-2 text-white hover:text-black">
                                    <Link href="/">
                                        <AiOutlineInstagram size={35} />
                                    </Link>
                                </div>
                                <div className="bg-green-500 rounded-full p-2 text-white hover:text-black">
                                    <Link href="/">
                                        <AiOutlineWhatsApp size={35} />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}
