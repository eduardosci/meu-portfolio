import { ReactNode } from "react"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startData: string
    }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startData), 'pt-BR',
    ).replace('há ', '')
    return(
        <div className="p-6 rounded-lg bg-gray-600/50 text-gray-300 flex flex-col gap-2 hover:text-sky-400 hover:bg-gray-400/20 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>

            <span>{relativeTime} de experiência</span>
        </div>
    )
}