"use client"

import { AnimatePresence,motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisisble,setIsVisible] = useState(false)

    useEffect(()=>{
        const toggleVisibility = ()=>{
            if(window.scrollY > 500){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll",toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    },[])

    const scrollToTop = ()=>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
        
    return (
        <AnimatePresence>
            {isVisisble && <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="group fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black bg-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-slate-900 dark:hover:bg-black dark:hover:text-white">
                    <ArrowUp size={20} className='transistion-transform group-hover:-translate-y-1'/>
                
            </motion.div>}
        </AnimatePresence>
    )
}

export default ScrollToTop