// /src/api/images.ts

import { NextApiRequest, NextApiResponse } from "next";

// **IMPORTANTE**: SUBSTITUA ESTA URL PELA URL BASE DO SEU SERVIDOR LARAVEL
const LARAVEL_API_BASE_URL = 'localhost:8000/files'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    // 1. Verificar Método HTTP: Deve ser GET
    if (req.method !== 'GET') {
        res.status(405).json({ error: "Method Not Allowed. Expected GET." });
        return;
    }

    const { user_dcmc: token } = req.cookies;

    // 2. Verificar Autenticação (Token)
    if (!token) {
        res.status(401).json({ error: "Unauthorized. Missing authentication token." });
        return;
    }

    try {
        // 3. Chamada para o Servidor Laravel
        const externalResponse = await fetch(`${LARAVEL_API_BASE_URL}/api/files`, {
            method: 'GET',
            headers: {
                // Passar o token de autorização para o Laravel
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json',
            },
            // next.js API Route é um ambiente de servidor, o que permite o fetch direto.
        });

        // 4. Tratar a Resposta do Laravel
        if (!externalResponse.ok) {
            // Tenta obter uma mensagem de erro JSON do Laravel
            const errorData = await externalResponse.json().catch(() => ({})); 
            
            // Retorna o status de erro do Laravel para o frontend (ex: 404, 403, etc.)
            return res.status(externalResponse.status).json({
                error: errorData.message || `Failed to fetch data from Laravel. Status: ${externalResponse.status}`
            });
        }

        // 5. Sucesso: Obter os dados e retornar
        const data = await externalResponse.json();
        res.status(200).json(data);
    } catch (e) {
        // 6. Erro de rede ou erro inesperado
        console.error('Error contacting external API:', e);
        res.status(500).json({ error: "Internal Server Error. Could not connect to the file server." });
    }
}