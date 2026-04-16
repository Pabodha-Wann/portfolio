import { Download } from "lucide-react"


const Hero = () => {
  return (
    
    <div className="flex h-[85vh] flex-col justify-between border-y border-slate-400/50 px-6 pt-50 pb-20 lg:pt-25 lg:pb-20 dark:border-slate-600/50 md:px-12">
      
      
      <div className="max-w-sm self-end text-right">
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-base">
          A passionate Full-Stack Developer and Undergraduate specializing in modern web ecosystems. Dedicated to engineering robust, performant digital solutions from conception to deployment.
        </p>
      </div>

      
      <div className="flex flex-col gap-3 self-start">

                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/50 bg-white/40 px-4 py-1.5 text-xs font-semibold tracking-widest text-slate-700 backdrop-blur-md dark:border-slate-700/50 dark:bg-black/40 dark:text-slate-300 sm:text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                      </span>
                      
                      <p className="font-mono text-xs">ENGINEERING DIGITAL EXPERIENCES</p>
                </div>

                <h1 className="font-bold tracking-tighter text-4xl sm:text-7xl md:text-8xl lg:text-8xl">
                  PABODHA<br/><p className="hover:text-purple-600 transition-colors duration-300">WANNIARACHCHI</p>
                  <div className="w-30 h-1 bg-purple-600"/>
                </h1>

                <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                  Full-Stack Developer & Undergraduate.
                </p>

                <button className="bg-black text-white font-mono py-3 px-7 w-fit rounded-3xl flex gap-3 justify-center items-center dark:bg-white dark:text-black cursor-pointer">
                  Resume <Download size={16}/>
                </button>
      </div>

    </div>
  )
}

export default Hero