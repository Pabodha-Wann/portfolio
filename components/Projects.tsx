"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"


const projects = [
  {
    id: "01",
    title: "AetherTech Platform",
    category: "E-Commerce Architecture",
    description: "A comprehensive MERN-stack e-commerce platform designed for refurbished tech and computer equipment. Engineered with a heavy focus on secure authentication, dynamic brand management, and scalable state handling.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS","Redux"],
    githubUrl: "https://github.com/Pabodha-Wann/AetherTech",
    liveUrl: "https://aether-tech-frontend.vercel.app/",
    image: "/aethertechi.jpg", 
  },
  {
    id: "02",
    title: "ReserveX Engine",
    category: "Event Booking System",
    description: "A high-performance stall booking system developed for exhibition management. Architected a robust backend using Spring Boot to handle complex reservation logic, connected to a seamless React frontend for real-time user interaction.",
    techStack: ["Spring Boot", "Java", "React", "MySQL", "REST API"],
    githubUrl: "https://github.com/Pabodha-Wann/ReserveX",
    liveUrl: "#",
    image: "/ReserveX.jpg"
  }
]


const ProjectFeature = ({ project, index }: { project: any, index: number }) => {
  // change the layout based on indx
  const isEven = index % 2 === 0

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`flex flex-col gap-8 md:gap-16 lg:gap-24 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center w-full`}
    >
      
      {/* IMAGE  */}
      <div className="w-full md:w-1/2 lg:w-7/12">
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
          
          
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
    
        </div>
      </div>

      {/* Text content */}
      <div className="flex w-full flex-col justify-center md:w-1/2 lg:w-5/12">
        
        
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm font-light text-slate-400">
            // {project.id}
          </span>
          <div className="h-px w-8 bg-purple-600/50" />
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-purple-600 uppercase">
            {project.category}
          </span>
        </div>

        
        <h3 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {project.title}
        </h3>

        
        <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        
        <div className="mb-10 flex flex-wrap gap-2">
          {project.techStack.map((tech: string, i: number) => (
            <span key={i} className="rounded-md bg-slate-100 px-3 py-1 font-mono text-[10px] font-medium tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300 uppercase">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 border-t border-slate-200 pt-8 dark:border-slate-800">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-mono text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
          >
            <FaGithub size={18} className="transition-transform group-hover:-translate-y-1" />
            <span>Repository</span>
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-mono text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
          >
            <ExternalLink size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span>Live Preview</span>
          </a>
        </div>

      </div>

    </motion.div>
  )
}


const Projects = () => {
  return (
    <section id="work" className="w-full border-b border-slate-400/50 py-24 dark:border-slate-600/50 md:py-32">
      
      {/* Header */}
      <div className="mb-20 px-6 md:px-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-purple-600" />
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
            Projects
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl uppercase lg:text-6xl">
          Featured Architecture.
        </h2>
      </div>

      
      <div className="flex flex-col gap-32 px-6 md:px-12">
        {projects.map((project, index) => (
          <ProjectFeature key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Projects