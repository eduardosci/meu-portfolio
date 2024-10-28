import { cn } from "@/app/lib/utils"

type SectionTitleProps = {
    title: string
    subtitle: string
    classname?: string
}

export const SectionTitle = ({
    title,
    subtitle,
    classname
}: SectionTitleProps) => {
    return(
        <div className={cn('flex flex-col gap-4', classname)}>
            <span className="font-mono text-sm text-sky-300">
                {`../${subtitle}`}
            </span>
            <h3 className="text-3xl font-medium">
                {title}
            </h3>
        </div>
    )
}