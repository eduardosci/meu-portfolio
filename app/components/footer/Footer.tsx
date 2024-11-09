import { RiRocketLine } from "react-icons/ri";

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
                Made by
                <RiRocketLine className="text-sky-300" />
                <strong className="font-medium">Eduardo Alves</strong>
            </span>
        </footer>
    );
};
