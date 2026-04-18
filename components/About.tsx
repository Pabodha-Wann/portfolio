"use client"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { GraduationCap, Library } from "lucide-react"



const About = () => {
    
const slideIn:Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
}

  return (
    <section id="about" className="w-full border-b border-slate-400/50 px-6 py-20 dark:border-slate-600/50 md:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-center"
      >
        
        
        <motion.div variants={slideIn} className="w-full md:w-5/12 lg:w-4/12">
          <div className="group relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 md:mx-0">
            <Image
              src="/image2.jpg"
              alt="Pabodha Wanniarachchi"
              fill
              className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full translate-y-full bg-white/20 p-4 backdrop-blur-md transition-transform duration-500 ease-in-out group-hover:translate-y-0 dark:bg-black/40">
              <p className="text-center font-mono text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase dark:text-slate-100">
                Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div variants={slideIn} className="flex w-full flex-col justify-center md:w-7/12 lg:w-8/12">
          
          
          <div className="mb-6 flex items-center gap-2">
            <div className="h-px w-8 bg-purple-600" />
            <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase">
              
              ABOUT ME
            </span>
          </div>

          
          <h2 className="mb-8 font-sans text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Full-Stack<span className="text-slate-300 dark:text-slate-600">{" "}Developer.</span>
          </h2>

          {/* Body text */}
          <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg lg:text-base lg:leading-loose max-w-3xl">
            <p>
              I am a Software Engineering undergraduate at the University of Kelaniya. I connect secure backend logic in{" "}
              <span className="font-semibold text-slate-900 transition-colors hover:text-purple-600 dark:text-slate-200">
                Spring Boot
              </span>{" "}
              with dynamic frontend experiences in the{" "}
              <span className="font-semibold text-slate-900 transition-colors hover:text-purple-600 dark:text-slate-200">
                MERN stack
              </span>
              , building digital products that are robust and user-friendly.
            </p>
            <p>
              Currently expanding into{" "}
              <span className="font-semibold text-slate-900 transition-colors hover:text-purple-600 dark:text-slate-200">
                AI/ML and LLM integration
              </span>
              , while adopting DevOps practices like{" "}
              <span className="font-semibold text-slate-900 transition-colors hover:text-purple-600 dark:text-slate-200">
                Docker and AWS
              </span>{" "}
              to streamline deployments.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-0">

  {/* University */}
          <div className="group flex gap-6 border-t border-slate-200 py-8 dark:border-slate-800">
            
            
            <div className="flex w-28 shrink-0 flex-col items-start gap-2 pt-0.5">
              <GraduationCap size={16} className="text-purple-600" />
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                2023 – Now
              </span>
            </div>

            
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                BSc (Hons) Software Engineering
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                University of Kelaniya
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-600 max-w-sm">
                Specializing in Net-Centric Web Application Development, Data Science & Engineering, Business Engineering, and Mobile Computing.
              </p>
              <span className="mt-3 font-mono text-[13px] font-bold tracking-[0.15em] text-purple-600 uppercase">
                CGPA: 3.94 / 4.0
              </span>
            </div>
          </div>

          {/* A/L */}
          <div className="group flex gap-6 border-t border-slate-200 py-8 dark:border-slate-800">
            
            
            <div className="flex w-28 shrink-0 flex-col items-start gap-2 pt-0.5">
              <Library size={16} className="text-purple-600" />
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                2019 – 2023
              </span>
            </div>

            
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                GCE Advanced Level
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sujatha Vidyalaya, Matara
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-600 max-w-sm">
                Completed coursework in Mathematics, Chemistry, and Physics.
              </p>
              <span className="mt-1 font-mono text-[12px] tracking-[0.15em] text-purple-600 uppercase">
                  3A Passes
              </span>
              <span className="mt-3 font-mono text-[13px] font-bold tracking-[0.15em] text-purple-600 uppercase">
                Z-Score: 1.83
              </span>
            </div>
          </div>


          <div className="border-t border-slate-200 dark:border-slate-800" />

          </div>


        </motion.div>
      </motion.div>
        

    </section>
  )
}

export default About