export async function POST(req: Request) {
    try {
        const body = await req.json();

        const response = await fetch("http://54.232.150.57/v1/chat-messages", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.body) {
            return new Response(JSON.stringify({ error: "Resposta vazia da API externa" }), { status: 500 });
        }

        return new Response(response.body, {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (error) {
        console.error("🔴 Erro no Proxy:", error);
        return new Response(JSON.stringify({ error: "Erro interno no servidor" }), { status: 500 });
    }
}