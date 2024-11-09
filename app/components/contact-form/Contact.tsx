'use client'

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"
import { Button } from "../button/Button"
import { SectionTitle } from "../section-title/Title"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const ContactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {
    const { handleSubmit, register, reset } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema)
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [responseMessage, setResponseMessage] = useState<string | null>(null)

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setResponseMessage(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                setResponseMessage("Mensagem enviada com sucesso!")
                reset() // Limpa o formulário após o envio bem-sucedido
            } else {
                setResponseMessage("Erro ao enviar a mensagem. Tente novamente.")
            }
        } catch (error) {
            console.error("Erro ao enviar a mensagem:", error)
            setResponseMessage("Erro ao enviar a mensagem. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adiciona rolagem suave
        });
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle
                    subtitle="contato"
                    title="Vamos trabalhar juntos? Entre em contato"
                    classname="items-center text-center"
                />
                 
                <form 
                    className="mt-12 w-full mx-auto flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        placeholder="Nome"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-sky-500 focus:border-sky-800 focus:ring-2 ring-sky-800"
                        {...register('name')}
                    />
                    <input
                        placeholder="E-mail"
                        type="email"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-sky-500 focus:border-sky-800 focus:ring-2 ring-sky-800"
                        {...register('email')}
                    />
                    <textarea
                        placeholder="Mensagem"
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-sky-500 focus:border-sky-800 focus:ring-2 ring-sky-800"
                        maxLength={500}
                        {...register('message')}
                    />
                    <Button className="w-max mx-auto mt-6" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        <HiArrowNarrowRight size={18} />
                    </Button>
                    {responseMessage && (
                        <p className="text-center mt-4 text-gray-300">{responseMessage}</p>
                    )}

                    {/* Seta de retorno para o topo */}
                    <div onClick={scrollToTop} className="flex justify-center mt-6 cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-sky-500/10 transition-all">
                            <HiArrowNarrowLeft 
                                size={24} 
                                className="text-sky-500 rotate-90" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
