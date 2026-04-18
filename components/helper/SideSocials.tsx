"use client"

import { motion } from "framer-motion"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

const socials = [
  { name: "LinkedIn", icon: FiLinkedin, link: "www.linkedin.com/in/pabodha-wanniarachchi-a0533a314" }, 
  { name: "GitHub", icon: FiGithub, link: "https://github.com/Pabodha-Wann" },
  { name: "Instagram", icon: FiInstagram, link: "https://www.instagram.com/pabodha_wanniarachchi/" },
]

const SideSocials = () => {
  return (
    // Hidden on small mobile screens.
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-1/2 right-6 md:right-12 z-50 hidden md:flex flex-col items-center gap-4"
    >
      
      {/* Icons */}
      <div className="flex flex-col gap-2 items-center">
        {socials.map((social, index) => {
          const Icon = social.icon
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group relative flex items-center justify-center"
            >
              
              <span className="absolute right-full mr-4 whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-900 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-white">
                {social.name}
              </span>

              
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-white transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900">
                <Icon size={18} strokeWidth={1.5} />
              </div>
            </a>
          )
        })}
      </div>

      
      <div className="h-24 w-px bg-slate-200 dark:bg-slate-800" />
      
    </motion.div>
  )
}

export default SideSocials