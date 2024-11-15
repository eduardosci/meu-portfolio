'use client'

import { TechBadge } from "@/app/components/tech-badge/Techs";
import { Button } from "@/app/components/button/Button";
import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb';
import { motion } from 'framer-motion';

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/eduardosci',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/eduardoalvesred04',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://wa.me/qr/7XSXU3AGKXZMJ1',
        icon: <TbBrandWhatsapp />
    }
];

const TECHNOLOGIES = [
    'Python',
    'React',
    'Next.js',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'Docker',
    'Git',
    'GitHub'
];

export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth'});
        }
    }

    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <motion.div 
                className="container flex items-start justify-between flex-col-reverse lg:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div 
                    className="w-full lg:max-w-[538px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-mono text-sky-300">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Eduardo Alves</h2>

                    <p className="text-gray-300 my-6 text-sm sm:text-base">Bem-vindo ao meu espaço digital! Sou fascinado por ciência e tecnologia, profissional de inteligência artificial com expertise em visão computacional, onde mergulho profundamente para criar soluções inovadoras que ampliam a capacidade de percepção das máquinas. Este portfólio é um reflexo do meu trabalho, onde compartilho projetos que vão desde a detecção de objetos até a análise de imagens geoespaciais.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-2 lg:max-w-[348px]">
                        {TECHNOLOGIES.map((tech, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TechBadge name={tech} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-4xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <motion.a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-sky-300 transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {contact.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        className="w-[300px] h-[300px] lg:w-[320px] lg:h-[470px] mb-6 lg:mb-0 shadow-2xl shadow-sky-400 rounded-lg object-cover"
                        width={320}
                        height={470}
                        src="/images/profile.jpeg"
                        alt="Minha foto do perfil"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};
