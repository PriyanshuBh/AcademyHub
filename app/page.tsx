import Image from "next/image";
import {FaArrowRight} from 'react-icons/fa';
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div>
        <section>
        <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p><FaArrowRight/>
                </div>
        </section>
      </div>
    </main>
  );
}
