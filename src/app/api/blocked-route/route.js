// app/api/blocked-route/route.js (ou pages/api/blocked-route.js)

// 🛑 IMPORTANTE: Certifique-se de que esta é a chave correta e ATIVA.
const GRAPHHOPPER_API_KEY = "98af2c53-1caf-4e38-a71a-b975ea1bcc7d"; 

export async function POST(request) { // Deve ser POST
    try {
        // 1. LER O CORPO (blocked_areas)
        const requestBody = await request.json();
        const blocked_areas = requestBody.blocked_areas;

        // 2. LER OS PARÂMETROS DA QUERY (ponto, veículo) - Note que request.url deve ser acessível
        const { searchParams } = new URL(request.url);

        // 3. MONTAR OS PARÂMETROS DA API GRAPHHOPPER
        const urlParams = new URLSearchParams(searchParams);
        urlParams.append('key', GRAPHHOPPER_API_KEY);
        urlParams.append('points_encoded', 'false'); 
        
        if (blocked_areas) {
            urlParams.append('blocked_areas', blocked_areas); 
        }

        const gh_url = `https://graphhopper.com/api/1/route?${urlParams.toString()}`;

        // 4. CHAMAR A API EXTERNA (GraphHopper)
        const response = await fetch(gh_url);
        
        // 5. TRATAMENTO DE ERROS DA API EXTERNA
        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify(errorData), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        
        // 6. SUCESSO
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        
    } catch (error) {
        // Se o erro interno for de sintaxe ou erro de rede do servidor
        console.error("Erro interno do servidor ao buscar rota:", error);
        return new Response(JSON.stringify({ error: 'Erro de processamento da API interna.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}