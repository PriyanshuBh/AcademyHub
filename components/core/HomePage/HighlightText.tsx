import React from 'react';

interface HighlightTextProps {
  text: string; 
}

// const HighlightText: React.FC<HighlightTextProps> = ({text})=> {
//   return (
//     <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
//         {" "}
//         {text}
//     </span>
//   )
// }


export default function HighlightText ({text}:HighlightTextProps) {
  return (
    <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
            {" "}
        {text}
    </span>
  )
}

// export default HighlightText;
