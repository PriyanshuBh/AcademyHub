"use client";
import HighlightText from "@/components/core/HomePage/HighlightText";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "@/components/core/HomePage/Button";
import CodeBlocks from "@/components/core/HomePage/codeBlocks";
import TimelineSection from "@/components/core/HomePage/TimelineSection";
import LearningLanguageSection from "@/components/core/HomePage/LearningLanguageSection";
import InstructorSection from "@/components/core/HomePage/InstructorSection";
import ExploreMore from "@/components/core/HomePage/ExploreMore";
import useLoadingBarStore from "@/store/useLoadingBarStore";
import RatingSlider from "@/components/core/Ratings/RatingSlider";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Home() {
  const { setProgress } = useLoadingBarStore.getState();
  return (
    <main>
      <div>
        {/* section1 */}
        <div className=" mx-auto relative flex flex-col w-9/12 max-w-maxContent items-center justify-between text-white ">
          <Link
            href="/signup"
            onClick={() => {
              setProgress(100);
            }}
            className="group mt-20 relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
          >
            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            <span className="backdrop absolute inset-[1px] rounded-full bg-pure-greys-700 transition-colors duration-200 group-hover:bg-pure-greys-900" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-[#FAFAFA]/20"></span>
            <span className="z-10 py-0.5 text-base text-richblack-100 flex items-center justify-center gap-1">
              ✨ Become an Instructor
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </Link>

          <div className="text-center w-[90%] sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.15]  font-semibold mt-7">
            Empower Your Future With
            <HighlightText text="Coding Skills" />
          </div>
          <div className=" mt-8 w-[80%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </div>

          <div className="flex flex-row gap-7 mt-10">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              Book a Demo
            </CTAButton>
          </div>

          <div className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <div className="-m-2 rounded-xl p-2 border border-richblack-800 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              {/* <BorderBeam size={250} duration={12} delay={9} /> */}
              <video className="video" muted loop autoPlay>
                <source src={"/assets/banner.mp4"} type="video/mp4" />
              </video>
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] z-40"></div>
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-[#0a0a0a] z-50"></div>
            </div>
          </div>
          <div>
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className=" font-semibold text-2xl lg:text-4xl sm:w-full">
                  Unlock Your
                  <HighlightText text={"coding potential "} />
                  with our online courses
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it yourself",
                linkto: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "learn more",
                linkto: "/login",
                active: false,
              }}
              codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
              codeColor={"white"}
              backgroudGradient={"grad"}
            />
          </div>

          {/*         
        <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
           Most Popular Courses
        </h2>
        <CourseSlider Courses={CatalogPageData?.selectedCourses}/>
      </div>       
        <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
           Students are learning
        </h2>
        <CourseSlider Courses={CatalogPageData?.differentCourses}/>
      </div>    */}

          {/* Code Section 2 */}
          <div>
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="text-4xl font-semibold">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                linkto: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "learn more",
                linkto: "/login",
                active: false,
              }}
              codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
              codeColor={"text-yellow-25"}
              backgroudGradient={"grad2"}
            />
          </div>

          <ExploreMore />

          <div className="hidden lg:block lg:h-[200px]"></div>

          <div className="bg-richblack-900 text-richblack-5 mt-6">
            <div className="  h-[310px]">
              <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                <div className="h-[150px]"></div>
                <div className="flex flex-row gap-7 text-white ">
                  <CTAButton active={true} linkto={"/catalog/Web Developement"}>
                    <div className="flex items-center gap-3">
                      Explore Full Catalog
                      <FaArrowRight />
                    </div>
                  </CTAButton>
                  <CTAButton active={false} linkto={"/signup"}>
                    <div>Learn more</div>
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
              <div className="flex flex-row gap-5 mb-10 mt-[95px]">
                <div className="text-4xl font-semibold w-[45%]">
                  Get the Skills you need for a
                  <HighlightText text={"Job that is in demand"} />
                </div>

                <div className="flex flex-col gap-10 w-[40%] items-start">
                  <div className="text-[16px]">
                    The modern Academy Hub is the dictates its own terms. Today,
                    to be a competitive specialist requires more than
                    professional skills.
                  </div>
                  <CTAButton active={true} linkto={"/signup"}>
                    <div>Learn more</div>
                  </CTAButton>
                </div>
              </div>

              <TimelineSection />

              <LearningLanguageSection />
            </div>
          </div>
          {/* section 3 */}
          <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
            <InstructorSection />

            {/* Review Slider here */}
          </div>
          <div className=" mb-16 mt-3 w-screen ">
            <h2 className="text-center text-2xl md:text-4xl font-semibold mt-8 text-richblack-5 mb-5">
              Reviews from other learners
            </h2>
            <RatingSlider />
          </div>
        </div>
      </div>
    </main>
  );
}
