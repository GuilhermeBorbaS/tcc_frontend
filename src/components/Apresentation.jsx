import Image from "next/image";
import CoordenatesMap from "./CoordenatesMap";
import ListImages from "./ListImages";

export default function Apresentation() {
    return (
        <div id='main' className="w-full h-[90%] bg-[#001679] px-10 lg:p-0">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full lg:w-[70%] h-full flex flex-col lg:flex-row justify-between items-start pt-24 gap-10 lg:gap-0">
                    <div className="flex flex-col text-white gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-5xl lg:text-7xl font-bold">Alagou aí?</span>
                            <span className="text-xl font-medium">Descubra e siga o caminho certo com a gente!</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-bold">Seus dias de desespero ou adivinhação acabaram.</span>
                            <span className="tex-xl">Nosso app usa inteligência artificial para avisar se um lugar está alagado e ainda
                                 te mostra a rota alternativa para chegar tranquilo.
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/image-apresentation.png"
                            alt="Logo"
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}