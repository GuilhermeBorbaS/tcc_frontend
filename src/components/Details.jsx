export default function Details({}) {
    return (
        <div id='topics' className="w-full h-[90%] bg-[#e5fbff] px-14 lg:p-0">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[80%] lg:w-[70%] h-full flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 py-14">
                    <div className="flex flex-col text-[#280f91] text-5xl lg:text-6xl font-light gap-1">
                        <div className="flex flex-row items-center gap-1">
                            <span>Seu</span>
                            <div className="py-2 pl-4 pr-10 rounded-full bg-[#c5ffbc]">
                                <span>aliado</span>
                            </div>
                        </div>
                        <span>para trajetos</span>
                        <span>sem surpresas</span>
                    </div>


                    <div className="w-full lg:w-1/3 flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-extrabold text-[#393be7]">Chegue seguro</span>
                            <span>
                                Saiba antes se o caminho está alagado e evite surpresas desagradáveis perto de casa
                                 ou do trabalho.
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-extrabold text-[#393be7]">Poupe tempo</span>
                            <span>
                                Planeje sua rota sem perder minutos em congestionamentos ou desvios inesperados.
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-extrabold text-[#393be7]">Super fácil de usar</span>
                            <span>
                                Com poucos toques, veja o que está acontecendo no seu trajeto e siga tranquilo.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}