"use client";

import Image from "next/image";

export default function Header() {

    const scrollTopic = (topicSlug) => {
        const element = document.getElementById(topicSlug);
        if (!element) return;

        const offsetTop = element.getBoundingClientRect().top + window.scrollY;

        const headerOffset = 120;

        window.scrollTo({
            top: offsetTop - headerOffset,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full h-[4em] bg-[#001679] sticky top-0 z-10">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[70%] h-full flex flex-row justify-between items-center">
                    <div className="w-full h-full flex items-center">
                        {/* <span className="font-bold text-[#024059]">Logo</span> */}
                        <Image
                            /* className="pt-4" */
                            src="/logo.png"
                            alt="Logo"
                            width={125}
                            height={125}
                        />
                    </div>

                    <div className="hidden w-full h-full lg:flex justify-end items-center text-white font-semibold">
                        <div className="flex flex-row gap-4">
                            <span className="cursor-pointer" onClick={() => scrollTopic('main')}>Início</span>
                            <span className="cursor-pointer" onClick={() => scrollTopic('topics')}>Saiba mais</span>
                            <span className="cursor-pointer" onClick={() => scrollTopic('list-flooding')}>Listagem de alagamentos</span>
                            <span className="cursor-pointer" onClick={() => scrollTopic('map')}>Mapa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}