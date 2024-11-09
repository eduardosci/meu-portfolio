import { SectionTitle } from "@/app/components/section-title/Title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"

export const PageIntro = () => {
    return(
        <section className="w-full min-h-[450px] lg:min-h-[630px] bg-bg-intro bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <SectionTitle 
                subtitle="projetos"
                title="Meus Projetos"
                classname="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
            />

            <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
                <p className="text-gray-300 text-center my-6 text-sm sm:text-base lg:text-lg max-w-[640px]">
                    Aqui você poderá ver uma prévia de alguns projetos que desenvolvi, aplicando tecnologias modernas e focando sempre em usabilidade, performance e design responsivo. Além de projetos de desenvolvimento web, também explorei áreas de Machine Learning, Inteligência Artificial e Análise de Dados, criando soluções que extraem valor de grandes volumes de dados e automatizam processos complexos. Esses projetos demonstram minha habilidade em criar interfaces intuitivas, modelos preditivos e análises aprofundadas, sempre alinhados com as melhores práticas de desenvolvimento e ciência de dados. Explore cada um deles para conhecer mais sobre meu estilo de trabalho, meus processos e minha dedicação em entregar soluções inovadoras e de alta qualidade.
                </p>

                <Link href="/" className="flex items-center gap-2 text-sky-300 hover:underline text-sm sm:text-base">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}
