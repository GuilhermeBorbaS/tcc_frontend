"use client";

import { getImagesData } from "@/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Teste() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        loadImages();
    }, [])

    const loadImages = async () => {
        const data = await getImagesData();
        if(data) {
            setImages(data);
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center py-10 gap-5">
            {images && images.map((image, key) => (
                <div className="flex" key={key}>
                    <Link href={image.web_view_link} target="_blank">
                        <div className="bg-[#04668C] rounded-lg px-5 py-1 cursor-pointer">
                            <span className="font-semibold text-sm text-[#F2F2F2]">{image.name}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}