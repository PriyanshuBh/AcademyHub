"use client"
import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import ReviewModal from '@/components/core/ViewCourse/ReviewModal';
import VideoDetailsSidebar from '@/components/core/ViewCourse/VideoDetailsSidebar';
import { getFullDetailsOfCourse } from '@/services/operations/courseDetailsAPI';
import useViewCourseStore from '@/store/useViewCourseStore';
import useAuthStore from '@/store/useAuthStore';
import VideoDetails from '@/components/core/ViewCourse/VideoDetails';

const ViewCourse = ({  params }:{ params: { courseId: string ,sectionId: string, subsectionId :string}}) => {

    const { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } =useViewCourseStore();
    
    const [reviewModal, setReviewModal] = useState<any>(false)
    const {courseId} = params
    const {token} = useAuthStore();


    useEffect(() => {
        const setCourseSpecifics = async () => {
            const courseData = await getFullDetailsOfCourse(courseId, token);
            (setCourseSectionData(courseData.courseDetails.courseContent));
            (setEntireCourseData( courseData.courseDetails));
            (setCompletedLectures(courseData.completedVideos));
            let lecture = 0;
            courseData?.courseDetails?.courseContent?.forEach((section:any) => {
                lecture += section?.subSection?.length;
            });
            (setTotalNoOfLectures(lecture));
        }
        setCourseSpecifics();
    }, [courseId, token]);
 
  return (
    
    <div className=' flex w-screen'>
        <div className='w-1/4'>
        <VideoDetailsSidebar setReviewModal={setReviewModal}   />
        </div>
      <div className=" ">
        <VideoDetails/>
      </div>
     
        {
            reviewModal && <ReviewModal  setReviewModal={setReviewModal}  />
        }
    </div>
  )
}

export default ViewCourse