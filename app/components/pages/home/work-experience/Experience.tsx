'use client'

import { SectionTitle } from "@/app/components/section-title/Title";
import { ExperienceItem } from "./experience-item";
import { motion } from "framer-motion";

export const WorkExperience = () => {
    return (
        <motion.section 
            className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >
            <motion.div 
                className="max-w-[420px]"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <motion.p 
                    className="text-gray-400 mt-6"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    Sou um profissional em constante busca de novos conhecimentos e desafios. Estou sempre disposto a aprender e me adaptar a diferentes situações, buscando contribuir de maneira significativa para o sucesso da equipe e da empresa. Minha experiência e habilidades me permitem enfrentar desafios com confiança e criatividade, mantendo o foco em crescer pessoal e profissionalmente.
                </motion.p>
            </motion.div>

            <motion.div 
                className="flex flex-col gap-4"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                <ExperienceItem />
            </motion.div>
        </motion.section>
    );
};
