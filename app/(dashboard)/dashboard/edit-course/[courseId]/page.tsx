
 "use client"
import React from "react";
import { getFullDetailsOfCourse } from "../../../../../services/operations/courseDetailsAPI";

import { useEffect } from "react";
import { useState } from "react";
import RenderSteps from "@/components/core/Dashboard/addCourse/RenderSteps";
import useAuthStore from "@/store/useAuthStore";
import useCourseStore from "@/store/useCourseStore";



const EditCourse =({ params }: { params: { courseId: string } })  => {
  const { token } = useAuthStore();
  const { course, setCourse, setEditCourse, setStep } = useCourseStore();
 
  const { courseId } =  params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const popualteCourse = async () => {
      setLoading(true);
      const result = await getFullDetailsOfCourse(courseId, token);
      if (result?.courseDetails) {
        setCourse(result.courseDetails);
        console.log("result", course);
        setEditCourse(true);
        setStep(1);
      }
      setLoading(false);
    };
    popualteCourse();
  }, []);

  return (
    <div className="mx-auto w-11/12 max-w-[1000px] py-10">
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Course
      </h1>
      {loading ? <p>Loading...</p> : <RenderSteps />}
    </div>
  );
};

export default EditCourse;
