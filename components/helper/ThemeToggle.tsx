"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const {theme,setTheme} = useTheme()
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted) return null

    // const currentTheme = theme === "system" ?systemTheme :theme

    return (
        <div>
            <button
                onClick={
                    ()=>setTheme(theme === "dark"?"light":"dark")}
                    className='relative flex items-center justify-center'
                >
                <Moon className="rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-500"/>
                <Sun className='absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-500'/>
            </button>
        </div>
    )
}

export default ThemeToggle