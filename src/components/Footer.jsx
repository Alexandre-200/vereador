import Link from "next/link";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";

export default function Footer() {
    return (
        <div className="bg-blue-300 w-ll h-[300px] mt-10 text-white flex items-center justify-center">
            <div className="">
                <p className="font-bold text-center uppercase text-1xl mb-5">me acompanhe nas mídias sociais</p>
                <div className="hidden md:flex justify-center">
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

                        <div className="bg-red-500 rounded-full p-2 text-white hover:text-black">
                            <Link href="/">
                                <AiOutlineYoutube size={35} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}