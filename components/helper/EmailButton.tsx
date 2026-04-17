"use client"
import { Check } from 'lucide-react'
import React, { useState } from 'react'
import { SiGmail } from 'react-icons/si'

const EmailButton = () => {

    const [copied,setCopied]=useState(false)
    const email = "pabodhawanniarachchi@gmail.com"

    const handleCopy = ()=>{
        

    }
    return (
       <button
        onClick={handleCopy}
        title='Copy email address'
        className='group p-2 flex items-center gap-2'>
            {copied ? (
                <Check className='text-xl text-green-600 dark:text-green-400'/>
            ):(
                <SiGmail className="text-xl text-black transition-all duration-300 group-hover:-translate-y-1 hover:opacity-70 dark:text-white dark:hover:text-white dark:hover:opacity-100" />
            )}
       </button>
    )
}

export default EmailButton