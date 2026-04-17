"use client"
import ThemeToggle from "./helper/ThemeToggle"
import { Briefcase, Home, Mail, User } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name:"Home",icon:Home,href:"/"},
  { name: "About",icon: User,href: "#about" },
  { name: "Work",icon: Briefcase,href: "#work" },
  { name: "Contact",icon: Mail,href: "#contact" },
]

const Navbar = () => {
  return (
    <div className="fixed z-50 top-8 left-1/2 -translate-x-1/2">
      <nav className="flex items-center justify-center gap-6 p-2 px-5 rounded-full border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md dark:border-slate-800/50 dark:bg-black/40 transition-colors">
        {navItems.map((item)=>{
          const Icon = item.icon

          return(
            <Link 
              key={item.href}
              href={item.href}
              className="text-slate-500 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5}/>
            </Link>
          )
          
      })}
      <ThemeToggle />
      </nav>
      
    </div>
  )
}

export default Navbar