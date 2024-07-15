"use client"

import { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai';
import { LuFacebook } from "react-icons/lu";


export default function Navbar() {

    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };

    return (
        <header className="bg-blue-300 text-[#000000] w-full ease-in duration-300 fixed top-0 left-0 z-10" >
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">

                <div className="flex items-center justify-center ">
                    <Link href='/'>
                        <div onClick={handleSmallerScreenNavigation} className="text-white relative">
                            <p className="font-bold text-[24px] md:text-[24px] x:text-3xl uppercase ">Almeida</p>
                            <p className="font-bold text-[18px] md:text-[18px] x:text-3xl uppercase ml-2">Agostinho 12345</p>
                        </div>

                    </Link>
                </div>

                { /* large screens nav */}
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white ">
                    <li className="mr-4 lg:mr-8 hover:text-[#000000]  hover:border-black cursor-pointer">
                        <Link href="/">início</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#000000]  hover:border-black cursor-pointer">
                        <Link href="propostas">propostas</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#000000]  hover:border-black cursor-pointer">
                        <Link href="comunidade">Gestão comunitária</Link>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#000000]  hover:border-black cursor-pointer">
                        <Link href="voluntariado">Voluntariado</Link>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#000000]  hover:border-black cursor-pointer">
                        <div href="" onClick={scrollToBottom}>Mídias Sociais</div>
                    </li>
                </ul>


                <div className=" fixed bottom-20 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:text-black focus:outline-none">
                    <Link href="/">
                        <AiOutlineWhatsApp size={35} />
                    </Link>
                </div>

                {/* smaller screen*/}

                <div onClick={handleSmallerScreenNavigation} className="flex md:hidden text-white">
                    {menuIcon ? (<AiOutlineClose size={35} />) : (<AiOutlineMenu size={35} />)}
                </div>

                {/* smaller screen icons*/}

                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-blue-300 text-white ease-in duration-300' :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-blue-300 text-white text-center ease-in duration-300'}>

                    <ul onClick={handleSmallerScreenNavigation} className="uppercase font-bold text-2xl">
                        <li onClick={handleSmallerScreenNavigation} className="py-4 hover:text-black cursor-pointer">
                            <Link href="/">início</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-4  hover:text-black cursor-pointer">
                            <Link href="propostas">propostas</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-4 hover:text-black cursor-pointer">
                            <Link href="/comunidade">Gestão comunitária</Link>
                        </li>
                        <li onClick={handleSmallerScreenNavigation} className="py-4 hover:text-black cursor-pointer">
                            <Link href="/voluntariado">voluntariado</Link>
                        </li>
                        <li >

                            <div >
                                <p className="text-[12px]">me acompanhe nas mídias sociais</p>
                                <div className="flex gap-4">
                                    <div className="bg-blue-500 rounded-full p-2 text-white hover:text-black">
                                        <Link legacyBehavior href="https://www.facebook.com/almeida.agostinho/" >
                                            <a target="_blank">
                                                <LuFacebook size={35} />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="bg-purple-700 rounded-full p-2 text-white hover:text-black">
                                        <Link legacyBehavior href="https://www.instagram.com/almeida1agostinho/?hl=pt-br">
                                            <a target="_blank">
                                                <AiOutlineInstagram size={35} />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="bg-red-500 rounded-full p-2 text-white hover:text-black">
                                        <Link href="/">
                                            <AiOutlineYoutube size={35} />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </header>
    )
}
