'use client'

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projetos',
    href: '/projects'
  }
]

export const Header = () => {
  return (
    <motion.header 
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              width={58}
              height={49}
              src="/images/logo.svg"
              alt="Meu logo"
            />
          </motion.div>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
            >
              <NavItem {...item} />
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
