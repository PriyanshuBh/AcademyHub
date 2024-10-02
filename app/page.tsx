import HighlightText from "@/components/core/HomePage/HighlightText";
import Image from "next/image";
import Link from 'next/link';
import {FaArrowRight} from 'react-icons/fa';
import CTAButton from "@/components/core/HomePage/Button"



export default function Home() {
  return (
    <main >

      <div >
        {/* section1 */}
        <div className=' mx-auto relative flex flex-col w-11/12 max-w-maxContent items-center justify-between text-white '>
          <Link href="/signup"
            // onClick={()=>{dispatch(setProgress(100))}}
            >
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                      <p>Become an Instructor</p><FaArrowRight/>
                    </div>
            </div>
          </Link>
          <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
                  Empower Your Future With 
                  <HighlightText text="Coding Skills"/> 
          </div>
          <div className=' mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
          </div>

          <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"} >Book a Demo</CTAButton>
            </div>


        </div>
      </div>
    </main>
  );
}
