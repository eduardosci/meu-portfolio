import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type CardProps = {
    title: string;
    description: string;
    techs: string;
    imageSrc: string;
    altText: string;
    githubLink: string;
};

// Função auxiliar para renderizar cada card com os dados específicos do projeto
const Card = ({ title, description, techs, imageSrc, altText, githubLink }: CardProps) => (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-sky-500 opacity-70 hover:opacity-100 transition-all group relative">
        <div className="w-full h-48 overflow-hidden relative">
            <Image
                width={380}
                height={200}
                src={imageSrc}
                alt={altText}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
            />
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <FaGithub className="text-white text-6xl opacity-70 mb-2" />
                <span className="text-white text-lg font-semibold">Ver no Github</span>
            </a>
        </div>
        <div className="flex-1 flex flex-col p-8">
            <strong className="font-medium text-gray-50/90 group-hover:text-sky-500 transition-all">{title}</strong>
            <p className="mt-2 text-gray-400 line-clamp-4">{description}</p>
            <span>{techs}</span>
        </div>
    </div>
);

// Componente principal com os diferentes projetos
export const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card
                title="Análise de Queimadas"
                description="Este projeto visa monitorar e analisar incêndios florestais no Brasil usando dados capturados pelo satélite NASA NPP..."
                techs="Python, Geopandas, Folium"
                imageSrc="/images/fire.jpg"
                altText="imagem projeto fire"
                githubLink="https://github.com/eduardosci/analise_de_queimadas"
            />
            <Card
                title="Human Eyes CNN"
                description="Detecção de olhos abertos e fechados usando uma rede neural convolucional..."
                techs="PyTorch, Pandas"
                imageSrc="/images/eyes.png"
                altText="imagem projeto eyes"
                githubLink="https://github.com/eduardosci/human_eyes_cnn"
            />
            <Card
                title="Previsão de Burnout"
                description="Modelo para prever o risco de burnout em profissionais..."
                techs="Sklearn, Pandas, LightGBM, XGBoost"
                imageSrc="/images/burnout.jpg"
                altText="imagem projeto burnout"
                githubLink="https://github.com/eduardosci/burnout_prediction"
            />
            <Card
                title="Sistema de Recomendação de Livros"
                description="Recomendação de livros com base nas preferências do usuário..."
                techs="Pandas, Sklearn"
                imageSrc="/images/recomendacao.jpg"
                altText="imagem projeto recomendacao de livros"
                githubLink="https://github.com/eduardosci/Sistema-de-recomendacao-de-livros"
            />
        </div>
    );
};
