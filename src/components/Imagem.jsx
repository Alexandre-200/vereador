import Image from "next/image";

export default function Imagem({  foto, w, h }) {
    return (
        <div className={`flex justify-center items-center p-4 `}>
            <div className="flex flex-col md:flex-row items-center w-[320px] md:w-[640px] font-semibold">
                
                <Image
                    className="border border-spacing-2 rounded-lg order-2"
                    src={`/${foto}.png`}
                    width={w}
                    height={h}
                    alt="" />
                
            </div>
        </div>
    )
}