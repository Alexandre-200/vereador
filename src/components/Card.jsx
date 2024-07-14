import Image from "next/image";

export default function Card({  descricao, foto }) {
    return (
        <div className={`flex justify-center items-center p-4 `}>
            <div className="flex flex-col md:flex-row items-center w-[320px] md:w-[640px] font-semibold">
                
                <Image
                    className="border border-spacing-2 rounded-lg order-2"
                    src={`/${foto}.png`}
                    width={300}
                    height={300}
                    alt="" />
                <p className="flex justify-center text-justify m-2 text-black uppercase">{descricao}</p>
            </div>
        </div>
    )
}