import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-[90%] bg-[#001679]">
            <div className="w-full lg:w-full h-full flex flex-col justify-center items-center gap-24 p-16">
                <div className="flex flex-col justify-center items-center text-white gap-7">
                    <span className="text-5xl font-medium">Chega de perrengue com alagamento.</span>
                    <span className="text-3xl font-medium">Acesse Alagou.AI e fique tranquilo</span>
                </div>

                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}