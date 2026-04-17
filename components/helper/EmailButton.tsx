"use client"
import { Check, Copy } from 'lucide-react'
import React, { useState } from 'react'
import { SiGmail } from 'react-icons/si'

const EmailButton = () => {

    const [copied,setCopied]=useState(false)
    const email = "pabodhawanniarachchi@gmail.com"

    const handleCopy = (e:React.MouseEvent)=>{
        e.preventDefault() //
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(()=>setCopied(false),3000)
    }
    return (
       <button
        onClick={handleCopy}
        title='Copy email address'
        className='group p-2 flex items-center gap-2 cursor-pointer'>
            {copied ? (
                <Check size={20} className=' text-purple-600 dark:text-purple-400'/>
            ):(
                <Copy size={20} className=" text-black transition-all duration-300 group-hover:-translate-y-1 hover:opacity-70 dark:text-white dark:hover:text-white dark:hover:opacity-100" />
            )}
       </button>
    )
}

export default EmailButton