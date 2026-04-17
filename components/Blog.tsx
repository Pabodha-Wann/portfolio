"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "Predicting the Burn: How Mathematics Can Help Us Fight Wildfires",
    meta: "Dec 17, 2025 • 3 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*emhcVc0kUxxz0sgUJc8I1w.jpeg", 
    link: "https://medium.com/@pabodha726/predicting-the-burn-how-mathematics-can-help-us-fight-wildfires-fc1bd5992b00",
  },
  {
    id: 2,
    title: "Building LunaO - A Simple 16-Bit Operating System from Scratch",
    meta: "Jun 23, 2025 • 3 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AVZLNNk4_UKIqFREAYRgwA.png", 
    link: "https://medium.com/@pabodha726/building-lunaos-a-simple-16-bit-operating-system-from-scratch-using-assembly-7599b25d0892",
  },
  {
    id: 3,
    title: "Mastering Linux Essentials: A Practical Guide for New Users",
    meta: "Jun 13, 2025 • 5 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*FAc3rBT8oV0BJWXu.jpg", 
    link: "https://medium.com/@pabodha726/mastering-linux-essentials-a-practical-guide-for-new-users-72dad38c438b",
  }
]

const Blogs = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="w-full border-b border-slate-400/50 py-16 dark:border-slate-600/50 md:py-24">
      
      
      <div className="mb-8 px-6 md:px-12 flex items-center gap-4">
        <h2 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white md:text-2xl uppercase">
          Latest Articles
        </h2>
        <div className="h-px w-full max-w-[100px] bg-slate-200 dark:bg-slate-800" />
      </div>

      
      <div className="flex flex-col px-6 md:px-12">
        {blogs.map((post, index) => (
          <motion.a 
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideUp}
            transition={{ delay: index * 0.1 }} 
            className="group relative flex flex-col sm:flex-row sm:items-center gap-5 border-t border-slate-200 py-5 transition-colors hover:bg-slate-50/30 dark:border-slate-800 dark:hover:bg-slate-900/10"
          >
            
            <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800 sm:h-16 sm:w-28 md:h-20 md:w-36">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
              />
              <div className="pointer-events-none absolute inset-0 rounded-md border border-black/5 dark:border-white/5" />
            </div>

            
            <div className="flex flex-col justify-center gap-1.5">
              <h3 className="text-base font-medium leading-snug text-slate-800 transition-colors group-hover:text-purple-600 dark:text-slate-200 dark:group-hover:text-purple-400 md:text-[17px]">
                {post.title}
              </h3>
              <p className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                {post.meta}
              </p>
            </div>

            
            <div className="mt-2 flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-hover:text-purple-600 dark:text-slate-500 dark:group-hover:text-purple-400 sm:mt-0 sm:ml-auto">
              Read <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

          </motion.a>
        ))}
      </div>

      {/* Medium Button */}
      <div className="mt-10 px-6 md:px-12">
        <a 
          href="https://medium.com/@pabodha726" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
        >
          View all on Medium 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

    </section>
  )
}

export default Blogs