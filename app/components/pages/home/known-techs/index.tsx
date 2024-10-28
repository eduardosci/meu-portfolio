import { SectionTitle } from "@/app/components/section-title/Title";
import { KnownTech } from "./known-tech";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandDocker } from "react-icons/tb";
import { TbBrandGit } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";

export const KnownTechs = () => {
    const technologies = [
        {
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            startData: '2024-10-01',
        },
        {
            icon: <TbBrandReact />,
            name: 'React',
            startData: '2024-09-01',
        },
        {
            icon: <TbBrandTailwind />,
            name: 'Node.js',
            startData: '2024-08-01',
        },
        {
            icon: <TbBrandPython />,
            name: 'Python',
            startData: '2021-07-01',
        },
        {
            icon: <TbBrandDocker />,
            name: 'Docker',
            startData: '2024-06-01',
        },
        {
            icon: <TbBrandGit />,
            name: 'Git',
            startData: '2024-05-01',
        },
        {
            icon: <TbBrandJavascript />,
            name: 'AWS',
            startData: '2024-04-01',
        },
        {
            icon: <TbBrandMongodb />,
            name: 'MongoDB',
            startData: '2024-03-01',
        },
    ];

    return (
        <section className="container py-16">
            <SectionTitle subtitle="Competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] grid-cols-3 gap-3 mt-[60px]">
                {technologies.map((tech, index) => (
                    <KnownTech key={index} tech={tech} />
                ))}
            </div>
        </section>
    );
};