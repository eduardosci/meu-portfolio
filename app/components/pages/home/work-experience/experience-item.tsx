import { TechBadge } from "@/app/components/tech-badge/Techs"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <>
            {/* Experiência na SJC Bioenergia */}
            <div className="grid grid-cols-[auto,1fr] gap-4 md:gap-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full border border-gray-500 p-0.5">
                        <Image
                            src="/images/sjcbioenergia_logo.jpeg"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="logo da empresa sjc bioenergia"
                        />
                    </div>
                    <div className="h-full w-[1px] bg-gray-800" />
                </div>

                <div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                        <a
                            href="https://www.linkedin.com/company/sjc-bioenergia/"
                            target="_blank"
                            className="text-gray-500 hover:text-sky-500 transition-colors"
                        >
                            Visite o perfil da SJC Bioenergia no LinkedIn
                        </a>
                        <h4 className="text-gray-300">Analista de Geotecnologia</h4>
                        <span className="text-gray-500">
                            nov 2023 - presente
                        </span>
                        <p className="text-gray-400">
                            Sou responsável por analisar imagens geoespaciais capturadas por drones e satélites, utilizando técnicas de visão computacional para automatizar tarefas e desenvolver modelos de detecção de ervas daninhas. Meu trabalho visa otimizar processos e fornecer insights valiosos para a tomada de decisões estratégicas.
                        </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        <TechBadge name="Python" />
                        <TechBadge name="YOLO" />
                        <TechBadge name="Qgis" />
                        <TechBadge name="Google Earth Engine" />
                    </div>
                </div>
            </div>

            {/* Experiência na Radar Saúde */}
            <div className="grid grid-cols-[auto,1fr] gap-4 md:gap-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full border border-gray-500 p-0.5">
                        <Image
                            src="/images/radarsaude_logo.jpeg"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="logo da empresa radar saude"
                        />
                    </div>
                    <div className="h-full w-[1px] bg-gray-800" />
                </div>

                <div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                        <a
                            href="https://www.linkedin.com/company/radarsaude/posts/?feedView=all"
                            target="_blank"
                            className="text-gray-500 hover:text-sky-500 transition-colors"
                        >
                            Visite o perfil da Radar Saúde no LinkedIn
                        </a>
                        <h4 className="text-gray-300">Analista de IA</h4>
                        <span className="text-gray-500">
                            ago 2023 - out 2023 (2 meses)
                        </span>
                        <p className="text-gray-400">
                            Minhas principais responsabilidades envolviam a automação de relatórios, técnicas de machine learning, além da implementação de modelos para detecção de anomalias por meio de visão computacional.
                        </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                        <TechBadge name="Python" />
                        <TechBadge name="Pytorch" />
                        <TechBadge name="Docker" />
                        <TechBadge name="Github" />
                    </div>
                </div>
            </div>
        </>
    )
}
