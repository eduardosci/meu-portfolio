import { TechBadge } from "@/app/components/tech-badge/Techs";
import { Button } from "@/app/components/button/Button";
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/eduardosci',
        icon: <TbBrandGithub />

    },
    {
        url: 'https://www.linkedin.com/feed/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://www.linkedin.com/feed/',
        icon: <TbBrandWhatsapp />
    }
]


export const HeroSection = () => {
    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[538px]">
                    <p className="font-mono text-sky-300">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Eduardo Alves</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Bem-vindo ao meu espaço digital! Sou fascinado por ciência e tecnologia, profissional de inteligência artificial com expertise em visão computacional, onde mergulho profundamente para criar soluções inovadoras que ampliam a capacidade de percepção das máquinas. Este portfólio é um reflexo do meu trabalho, onde compartilho projetos que vão desde a detecção de objetos até a análise de imagens geoespaciais.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[348px]">
                        {Array.from({length: 5 }).map((_, index) => (
                            <TechBadge name="Next.js" key={index} />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm: gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-4xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map(( contact, index) => (
                                <a
                                href={contact.url}
                                key={`contact-${index}`}
                                target="_blank"
                                className="hover:text-sky-300 transition-colors"
                                >
                                    {contact.icon}

                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover" 
                    width={350}
                    height={404}
                    src="/images/profile-img.jpeg"
                    alt="Minha foto do perfil"
                />
            </div>

        </section>
    )
}