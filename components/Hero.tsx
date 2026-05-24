"use client"
import {  ArrowRight, Download } from "lucide-react"
import {AnimatePresence,motion}  from "framer-motion"


const Hero = () => {
  return (
    
    <div className="relative flex h-[85vh] flex-col justify-between border-y border-slate-400/50 px-6 pt-50 pb-20 lg:pt-25 lg:pb-20 dark:border-slate-600/50 md:px-12">

      {/* Grid & Gradient */}
      <div className="absolute inset-0 z-0 bg-macro-grid bg-grid-mask pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
      
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-sm self-end text-right">
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
          A passionate Full-Stack Developer and Undergraduate specializing in modern web ecosystems. Dedicated to engineering robust, performant digital solutions from conception to deployment.
        </p>
      </motion.div>

      
      <div className="flex flex-col gap-3 self-start">

                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/50 bg-white/40 px-4 py-1.5 text-xs font-semibold tracking-widest text-slate-700 backdrop-blur-md dark:border-slate-700/50 dark:bg-black/40 dark:text-slate-300 sm:text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      
                      <p className="font-mono text-xs uppercase">Available for internship</p>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                  className="font-bold tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-8xl">
                  PABODHA<br/><p className="hover:text-purple-600 transition-colors duration-300">WANNIARACHCHI</p>
                  <div className="w-30 h-1 bg-purple-600"/>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                  className="text-lg font-medium text-slate-600 dark:text-slate-400">
                  Full-Stack Developer & Undergraduate.
                </motion.p>

                <div className="flex gap-3">
                  <motion.a 
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                    className="bg-black text-white font-mono py-3 px-7 w-fit rounded-3xl flex gap-3 justify-center items-center dark:bg-white dark:text-black cursor-pointer">
                    Resume <Download size={16}/>
                  </motion.a>

                  <motion.a
                    href="#work"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                    className="bg-transperent text-black font-mono py-3 px-7 w-fit rounded-3xl flex gap-3 justify-center items-center border broder-black dark:bg-transperent dark:text-white dark:border-white cursor-pointer">
                    View My work <ArrowRight size={16}/>
                  </motion.a>
              </div>
      </div>

    </div>
  )
}

export default Hero