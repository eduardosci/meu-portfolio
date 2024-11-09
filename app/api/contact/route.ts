import { NextResponse } from "next/server"
import { z } from "zod"

// Validação do corpo da requisição
const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string()
})

// URL do Webhook
const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = bodySchema.parse(body)

        // Configuração do payload do embed
        const embedPayload = {
            embeds: [
                {
                    author: {
                        name: "Info",
                        url: "https://example.com",
                    },
                    title: "Mensagem de contato",
                    url: "https://example.com",
                    description: "Este é um exemplo de descrição com Markdown!",
                    fields: [
                        {
                            name: "Nome",
                            value: name,
                            inline: true
                        },
                        {
                            name: "Email",
                            value: email,
                            inline: true
                        },
                        {
                            name: "Mensagem",
                            value: message,
                            inline: true
                        }
                    ],
                    image: {
                        url: "https://cubedhuang.com/images/alex-knight-unsplash.webp"
                    },
                    thumbnail: {
                        url: "https://dan.onl/images/emptysong.jpg"
                    },
                    color: 0x00b0f4,
                    footer: {
                        text: "Example Footer",
                        icon_url: "https://slate.dan.onl/slate.png"
                    },
                    timestamp: new Date().toISOString()
                }
            ]
        }

        // Envio do webhook
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(embedPayload)
        })

        // Verifica se o envio foi bem-sucedido
        if (!response.ok) {
            throw new Error("Falha ao enviar o webhook")
        }

        return NextResponse.json({ success: true, message: "Webhook enviado com sucesso!" })
    } catch (err) {
        console.error(err)
        return NextResponse.error()
    }
}
