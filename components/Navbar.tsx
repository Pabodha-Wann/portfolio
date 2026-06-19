"use client"
import ThemeToggle from "./helper/ThemeToggle"
import { Briefcase, Home, Mail, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "#about" },
  { name: "Work", icon: Briefcase, href: "#work" },
  { name: "Contact", icon: Mail, href: "#contact" },
]

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="fixed z-50 top-8 left-1/2 -translate-x-1/2">
      <nav
        className="relative flex items-center justify-center gap-1 p-2 px-3 rounded-full border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md dark:border-slate-800/50 dark:bg-black/40 transition-colors"
        onMouseLeave={() => setHoveredItem(null)}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.href)}
              className="relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-slate-500 transition-colors duration-150 hover:text-black dark:text-slate-400 dark:hover:text-white z-10"
            >
              {/* Sliding pill background */}
              <AnimatePresence>
                {hoveredItem === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white dark:bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              <Icon className="relative h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="relative hidden md:inline font-mono text-[11px] font-semibold tracking-wider uppercase">
                {item.name}
              </span>
            </Link>
          )
        })}

        <div className="ml-1 pl-2 border-l border-slate-300/50 dark:border-slate-700/50">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}

export default Navbar