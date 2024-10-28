type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) =>{
    return(
        <span className="text-sky-100 bg-sky-400/70 text-sm py-1 px-5 rounded-lg">
            {name}

        </span>
    )
}