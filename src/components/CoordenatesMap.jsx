// components/CoordenatesMap.jsx

"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function CoordenatesMap({ data }) {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        let L;
        let map;

        // Importa leaflet somente no cliente
        if (typeof window !== "undefined") {
            L = require("leaflet");

            // 🔴 ÍCONE VERMELHO PERSONALIZADO
            const redIcon = new L.Icon({
                iconUrl: "/marker-red.png", // coloque este arquivo em /public/
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
                shadowUrl: "/marker-shadow.png",
                shadowSize: [41, 41],
                shadowAnchor: [13, 41],
            });

            if (mapContainerRef.current && L) {
                // Evita recriar o mapa duplicado
                if (mapContainerRef.current._leaflet_id) {
                    mapContainerRef.current._leaflet_id = null;
                }

                // Inicializa o mapa
                const initialCenter = [-24.00583, -46.40278];
                map = L.map(mapContainerRef.current).setView(initialCenter, 12);

                // TileLayer
                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }
                ).addTo(map);

                // Marcadores com ícone vermelho
                data.forEach((location) => {
                    const marker = L.marker(
                        [location.latitude, location.longitude],
                        { icon: redIcon }
                    ).addTo(map);

                    marker.bindPopup(`<b>${location.name}</b>`);
                });

                // Ajustar zoom aos pontos
                if (data.length > 1) {
                    const bounds = L.latLngBounds(
                        data.map((loc) => [loc.latitude, loc.longitude])
                    );
                    map.fitBounds(bounds, { padding: [50, 50] });
                }
            }
        }

        // Cleanup
        return () => {
            if (map) map.remove();
        };
    }, [data]);

    return (
        <div
            ref={mapContainerRef}
            className="w-full"
            style={{ height: "500px", border: "1px solid #ccc" }}
        />
    );
}
