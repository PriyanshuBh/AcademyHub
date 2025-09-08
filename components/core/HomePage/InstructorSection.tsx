import React from "react";
import Image from "next/image";
import Instructor from "../../../public/assets/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="w-[50%]">
          <Image src={Instructor} alt="" className="rounded-xl" />
        </div>

        <div className="md:w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semobold md:w-[50%]">
            Become an
            <HighlightText text={"Instructor"} />
          </div>

          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            AcademyHub. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit mx-auto">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
