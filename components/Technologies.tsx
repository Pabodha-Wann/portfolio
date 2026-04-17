"use client"
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, 
  SiSpringboot, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiPython, SiDocker, SiTypescript, SiRedux, SiPhp, SiFirebase, SiFigma,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const techStacks = {
  frontend: [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]", hex: "#61DAFB", proficiency: 80 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white", hex: "#a8a29e", proficiency: 60 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]", hex: "#38B2AC", proficiency: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", hex: "#3178C6", proficiency: 80 },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", hex: "#F7DF1E", proficiency: 90 },
    { name: "HTML5 / CSS3", icon: SiHtml5, color: "text-[#E34F26]", hex: "#E34F26", proficiency: 90 },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]", hex: "#764ABC", proficiency: 75 },
  ],
  backend: [
    { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]", hex: "#6DB33F", proficiency: 75 },
    { name: "Java", icon: FaJava, color: "text-[#007396]", hex: "#007396", proficiency: 80 },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", hex: "#339933", proficiency: 80 },
    { name: "Express.js", icon: SiExpress, color: "text-slate-900 dark:text-white", hex: "#a8a29e", proficiency: 80 },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", hex: "#47A248", proficiency: 85 },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", hex: "#4479A1", proficiency: 80 },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]", hex: "#777BB4", proficiency: 70 },
  ],
  tools: [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]", hex: "#3776AB", proficiency: 60 },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", hex: "#2496ED", proficiency: 50 },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]", hex: "#FFCA28", proficiency: 85 },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", hex: "#F24E1E", proficiency: 80 },
  ]
}

//  ---- single tech card  ----
const TechCard = ({ tech }: { tech: typeof techStacks.frontend[0] }) => {
  const Icon = tech.icon
  return (
    <div className="
      group/card relative flex h-28 w-36 lg:w-40 flex-col items-start justify-between
      rounded-xl border border-slate-200 bg-white/60 px-4 py-3
      backdrop-blur-sm transition-all duration-300 hover:bg-white
      dark:border-slate-800 dark:bg-black/10
      dark:hover:bg-black/10
    ">
      {/* icon + percentage */}
      <div className="flex w-full items-center justify-between">
        <Icon className={`text-2xl lg:text-3xl transition-transform duration-300 group-hover/card:scale-110 ${tech.color}`} />
        <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-600">
          {tech.proficiency}%
        </span>
      </div>

      {/* name */}
      <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
        {tech.name}
      </span>

      {/* progress bar — flush to card bottom */}
      <div className="h-[2px] w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${tech.proficiency}%`, backgroundColor: tech.hex }}
        />
      </div>
    </div>
  )
}

// --- marquee row ----
const MarqueeRow = ({
  items, direction, label,
}: {
  items: typeof techStacks.frontend
  direction: "left" | "right"
  label: string
}) => {
  const duped = [...items, ...items, ...items, ...items]

  return (
    <div className="flex w-full flex-col gap-4">
      {/* row label */}
      <div className="flex items-center gap-3 px-6 md:px-12">
        <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-purple-600 uppercase">
          // {label}
        </span>
      </div>

      {/* track */}
      <div className="group relative flex w-full overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-[#0a0a0a]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-[#0a0a0a]" />

        <div className={`flex w-fit items-center gap-3 lg:gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}>
          {duped.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}


const Technologies = () => {
  return (
    <section className="w-full border-b border-slate-400/50 py-24 dark:border-slate-600/50 md:py-32">

      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left  { animation: marqueeLeft  40s linear infinite; }
        .animate-marquee-right { animation: marqueeRight 40s linear infinite; }

        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused !important;
        }
      `}</style>

      
      <div className="mb-16 px-6 md:px-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-purple-600" />
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
            Tech Stack
          </span>
        </div>
        <h2 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl">
          The Stack
          <br />
          <span className="text-slate-300 dark:text-slate-400">I Build With.</span>
        </h2>
      </div>

      
      <div className="flex flex-col gap-10 overflow-hidden">
        <MarqueeRow label="Frontend" items={techStacks.frontend} direction="left" />
        <MarqueeRow label="Backend & Databases" items={techStacks.backend} direction="right" />
        <MarqueeRow label="Tools & Other" items={techStacks.tools} direction="left" />
      </div>

    </section>
  )
}

export default Technologies