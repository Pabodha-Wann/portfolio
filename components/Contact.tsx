"use client"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
  const slideIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  }

  const [status,setStatus]=useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
        const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,{
            method:"POST",
            body:data,
            headers:{
                'Accept':"application/json"
            }
        })

        if(response.ok){
            setStatus("success")
            form.reset()
            setTimeout(() => setStatus("idle"), 3000)

        }else{
            setStatus("error")
        }
        
    } catch (error) {
        console.log(error)
        setStatus("error")
    }

  }

  const inputClass = `
    w-full bg-transparent border-b border-slate-200 dark:border-slate-800 
    py-3 text-sm text-slate-900 dark:text-white 
    placeholder:text-slate-400/50 
    focus:border-purple-600 dark:focus:border-purple-500
    focus:outline-none transition-colors duration-300
  `

  return (
    <section className="w-full border-b border-slate-400/50 py-24 dark:border-slate-600/50 md:py-32">

      
      <div className="mb-20 px-6 md:px-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-purple-600" />
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
            Get In Touch
          </span>
        </div>
        <h2 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
          Lets
          <br />
          <span className="text-slate-300 dark:text-slate-500">Connect.</span>
        </h2>
      </div>

      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideIn}
        className="flex flex-col gap-16 px-6 md:flex-row md:items-start md:px-12"
      >

        
        <div className="w-full md:w-5/12">

          <p className="mb-12 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Open to internship opportunities, collaborations, or just a conversation about tech. Drop a message - I read everything.
          </p>

          <div className="flex flex-col gap-6">
            
            
            <a href="mailto:pabodhawanniarchchi@gmail.com"
              className="group flex items-center gap-4 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:border-purple-500/50 group-hover:bg-purple-500/5 dark:border-slate-800 dark:bg-transparent dark:group-hover:bg-purple-500/5">
                <Mail size={15} className="transition-colors group-hover:text-purple-600" />
              </div>
              <span className="text-sm tracking-wide">pabodhawanniarchchi@gmail.com</span>
            </a>

            
            
            <a href="tel:+94701947968"
              className="group flex items-center gap-4 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:border-purple-500/50 group-hover:bg-purple-500/5 dark:border-slate-800 dark:bg-transparent dark:group-hover:bg-purple-500/5">
                <Phone size={15} className="transition-colors group-hover:text-purple-600" />
              </div>
              <span className="text-sm tracking-wide">+94 70 194 7968</span>
            </a>

            
            <div className="flex items-center gap-4 text-slate-500">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-transparent">
                <MapPin size={15} />
              </div>
              <span className="text-sm tracking-wide">Matara, Sri Lanka</span>
            </div>
          </div>

          {/* availability tag */}
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
              Available for internship
            </span>
          </div>
        </div>

        
        <div className="w-full md:w-7/12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">

            
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                  Name
                </label>
                <input required type="text" id="name" name="name" placeholder="Your name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                  Email
                </label>
                <input required type="email" id="email" name="email" placeholder="your@email.com" className={inputClass} />
              </div>
            </div>

            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                Subject
              </label>
              <input required type="text" id="subject" name="subject" placeholder="What's this about?" className={inputClass} />
            </div>

            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            
            <div className="flex sm:justify-end">
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`
                  group flex w-full sm:w-auto items-center justify-center gap-3
                  rounded-full border border-black bg-black
                  px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white
                  transition-all duration-300
                  hover:bg-transparent hover:text-black
                  dark:border-white dark:bg-white dark:text-black
                  dark:hover:bg-transparent dark:hover:text-white
                  disabled:opacity-70 disabled:cursor-not-allowed
                  cursor-pointer

                  ${status === "success" 
                    ? "border-purple-500 bg-purple-500 text-white dark:border-purple-500 dark:bg-purple-500 dark:text-white" 
                    : "border-black bg-black text-white hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
                  }
                `}

              >
                {status === "idle" && 
                    (<>
                    Send Message
                    <Send size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>)
                }
                {status === "submitting" && "Sending..."}
                {status === "success" && (
                  <>
                    Sent! <Check size={14} />
                  </>
                )}
                {status === "error" && "Error - Try Again"}
              </button>
            </div>

          </form>
        </div>

      </motion.div>
    </section>
  )
}

export default Contact