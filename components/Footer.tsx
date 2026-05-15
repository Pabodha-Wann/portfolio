"use client"
import { FiLinkedin,FiGithub ,FiInstagram,FiMail} from "react-icons/fi"
import EmailButton from "./helper/EmailButton"

const socials = [
  { 
    name: "GitHub", 
    icon: FiGithub, 
    link: "https://github.com/Pabodha-Wann" 
  },
  { 
    name: "LinkedIn", 
    icon: FiLinkedin, 
    link: "https://linkedin.com/in/pabodha-wanniarachchi-a0533a314"
  },
  { 
    name: "Instagram", 
    icon: FiInstagram, 
    link: "https://www.instagram.com/pabodha_wanniarachchi/"
  },
  { 
    name: "Email", 
    icon: FiMail, 
    link: "mailto:pabodhawanniarachchi@gmail.com" 
  },
]

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 md:px-12">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        
        
        <p className="font-mono text-sm font-medium tracking-widest text-black dark:text-white uppercase">
          © {new Date().getFullYear()} Pabodha Wanniarachchi.
        </p>

        
        <div className="flex items-center gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group p-2"
              >
                <Icon 
                  className="text-xl text-black transition-all duration-300 group-hover:-translate-y-1 hover:opacity-70 dark:text-white dark:hover:text-white dark:hover:opacity-100" 
                />
              </a>
            )
          })}

          <EmailButton />
        </div>

      </div>
    </footer>
  )
}

export default Footer