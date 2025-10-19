import Image from "next/image";

export default function Header() {
    return (
        
        <div className="w-full h-[4em] bg-[#024059]">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[70%] h-full flex flex-row justify-between items-center">
                    <div className="w-full h-full flex items-center">
                        {/* <span className="font-bold text-[#024059]">Logo</span> */}
                        <Image
                            className="pt-4"
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="w-full h-full flex justify-end items-center">
                        {/* <div className="py-1 px-3 bg-[#04668C] text-[#F2F2F2] rounded-xl font-medium">
                            <span>Botão teste</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}