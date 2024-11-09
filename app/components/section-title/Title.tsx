'use client'

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
    title: string;
    subtitle: string;
    classname?: string;
};

export const SectionTitle = ({
    title,
    subtitle,
    classname
}: SectionTitleProps) => {
    return (
        <motion.div 
            className={cn('flex flex-col gap-4', classname)}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            <motion.span 
                className="font-mono text-sm text-sky-300"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {`../${subtitle}`}
            </motion.span>

            <motion.h3 
                className="text-3xl font-medium"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                {title}
            </motion.h3>
        </motion.div>
    );
};
