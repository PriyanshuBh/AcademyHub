"use client"
import React, { ReactNode } from 'react'


const ViewCourse = ({ children}:{children: ReactNode }) => {

  

  return (
    
    <div className=' flex w-screen'>
        
        {children}
        </div>
  )
}

export default ViewCourse