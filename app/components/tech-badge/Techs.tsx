type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) =>{
    return(
        <span className="text-sky-50 bg-sky-500/90 text-sm py-1 px-5 rounded-lg">

            {name}

        </span>
    )
}