import React from 'react'
import HighlightText from '@/components/core/HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=' text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white'>
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <span className='bg-gradient-to-b from-[#1f23ff] via-[#2467f8] to-[#348ef5] text-transparent bg-clip-text font-bold'>combines technology</span>
      <span className='bg-gradient-to-b from-[#dc2fff] to-[#f825c3] text-transparent bg-clip-text font-bold'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='bg-gradient-to-b from-[#b32fff] to-[#f019c1] text-transparent bg-clip-text font-bold'>
      {" "}
        unparalleled educational experience.
      </span>
    </div>
  )
}

export default Quote
