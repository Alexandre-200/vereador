

export default function Video({ videoId, descricao }) {

    return (
        <div className="flex justify-center items-center text-justify">

            <div className="w-[320px] md:w-[640px] ">
                <iframe
                    className="rounded-lg w-[320px] md:w-[640px] h-[240px] md:h-[380px]"
                    //width={`w-[400px] md:w-[640px]`}
                    //height={`w-[400px] md:w-[640px]`}

                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen

                />
                <p className=" mb-5 mt-2  text-[14px]  md:text-[18px] font-semibold uppercase">{descricao}</p>
            </div>

        </div>
    )
}