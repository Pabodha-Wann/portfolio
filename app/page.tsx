import About from "@/components/About"
import Blogs from "@/components/Blog"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import { Particles } from "@/components/ui/particles"

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center transition-colors duration-300 overflow-x-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      {/* <div className="absolute inset-0 z-0 bg-macro-grid bg-grid-mask pointer-events-none" /> */}

      <div className="relative z-10 w-full max-w-6xl min-h-screen border-x border-slate-400/50 dark:border-slate-600/50">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Blogs/>
      </div>

    </div>
  )
}
