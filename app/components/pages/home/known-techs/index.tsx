'use client'

import { SectionTitle } from "@/app/components/section-title/Title";
import { KnownTech } from "./known-tech";
import { TbBrandPython, TbBrandReact, TbBrandNextjs, TbBrandTailwind, TbBrandJavascript, TbBrandTypescript, TbBrandDocker, TbBrandGit, TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="Competências" title="Conhecimentos" />

            <motion.div 
                className="grid grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] grid-cols-3 gap-3 mt-[60px]"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        }
                    }
                }}
            >
                {[
                    {
                        icon: <TbBrandPython />,
                        name: 'Python',
                        startData: '2022-07-01'
                    },
                    {
                        icon: <TbBrandReact />,
                        name: 'React',
                        startData: '2024-10-01' 
                    },
                    {
                        icon: <TbBrandNextjs />,
                        name: 'Next.js',
                        startData: '2024-10-01' 
                    },
                    {
                        icon: <TbBrandTailwind />,
                        name: 'Tailwind',
                        startData: '2024-10-01' 
                    },
                    {
                        icon: <TbBrandJavascript />,
                        name: 'JavaScript',
                        startData: '2024-10-01' 
                    },
                    {
                        icon: <TbBrandTypescript />,
                        name: 'TypeScript',
                        startData: '2024-10-01'
                    },
                    {
                        icon: <TbBrandDocker />,
                        name: 'Docker',
                        startData: '2023-08-01' 
                    },
                    {
                        icon: <TbBrandGit />,
                        name: 'Git',
                        startData: '2023-08-01'
                    },
                    {
                        icon: <TbBrandGithub />,
                        name: 'Github',
                        startData: '2023-08-01' 
                    }
                ].map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <KnownTech tech={tech} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
