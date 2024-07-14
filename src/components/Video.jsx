

export default function Video({ videoId, width, height, titulo, descricao }) {
    return (
        <div className="flex justify-center items-center">

            <div className="w-[400px] md:w-[640px]">
                <iframe
                    className="rounded-lg "
                    width={width}
                    height={height}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <p className=" mb-5 mt-2  text-1xl  flex flex-auto ">{descricao}</p>
            </div>
            <div>
                
            </div>

        </div>
    )
}