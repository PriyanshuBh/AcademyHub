"use client"
import React from 'react'
import Link from 'next/link';
import useLoadingBarStore from '@/store/useLoadingBarStore';




interface ButtonProps {
    
    
   
    children: React.ReactNode; // Allow any valid React node
    active: boolean; // Example prop for active state
    linkto: string ; // Example prop for link (if applicable)
    onClick?: () => void; // Optional click handler
    className?: string; 
  }
const Button:React.FC<ButtonProps> = ({children,active,linkto}) => {
  const {setProgress} =useLoadingBarStore();
  return (
    <Link href={linkto}
    onClick={()=>{setProgress(100)}}  
    >
    <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} hover:scale-95 transition-all duration-200`}>
        {children}
        </div>
        </Link>
  )
}

export default Button