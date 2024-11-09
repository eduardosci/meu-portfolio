'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from 'next/navigation';

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    return(
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-mono text-sm sm:text-lg md:text-xl", // Responsividade no tamanho do texto
            isActive && 'text-gray-50',
        )}>
            <span className="text-sky-400 opacity-90 text-xs sm:text-sm md:text-base">#</span>
            {label}
        </Link>
    )
}
