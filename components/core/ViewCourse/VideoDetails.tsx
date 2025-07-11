import React from 'react'

import { useParams, useRouter } from "next/navigation"
import { useState } from 'react';
import { useEffect } from 'react';
import { ControlBar, Player } from "video-react";
// import '~video-react/dist/video-react.css'; 
import "video-react/dist/video-react.css";

import { BigPlayButton, LoadingSpinner, PlaybackRateMenuButton, ForwardControl, ReplayControl, CurrentTimeDisplay, TimeDivider } from 'video-react';
import {BiSkipPreviousCircle} from 'react-icons/bi';
import {BiSkipNextCircle} from 'react-icons/bi';
import {MdOutlineReplayCircleFilled} from 'react-icons/md';
import { markLectureAsComplete } from '../../../services/operations/courseDetailsAPI';
import useViewCourseStore from '@/store/useViewCourseStore';
import useAuthStore from '@/store/useAuthStore';
import useProfileStore from '@/store/useProfileStore';




const VideoDetails = () => {
  const {courseId,sectionId,subsectionId} = useParams();
  const  { setCompletedLectures }=useViewCourseStore();

  const {token} = useAuthStore();
  const {user}= useProfileStore();
  // console.log("user",user._id);
  const {courseSectionData, courseEntireData, completedLectures, totalNoOfLectures} = useViewCourseStore();
  const navigate = useRouter();
  const playerRef = React.useRef<any>(null);

  const [videoData, setVideoData] = useState<any>([]);
  const [videoEnd, setVideoEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    if (courseSectionData.length === 0) {
      return;
    }
    const filteredSection = courseSectionData?.filter((section) => section._id === sectionId);
    const filteredSubsection = filteredSection[0]?.subSection?.filter((subsection:any) => subsection._id === subsectionId);
    setVideoData(filteredSubsection?.[0]);
    // console.log(filteredSubsection[0]);
    setVideoEnd(false);
  }, [courseSectionData, sectionId, subsectionId]);


  const isLastLecture = () => {
     const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
      const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection:any) => subsection._id === subsectionId);
      if (currentSubsectionIndex === courseSectionData[currentSectionIndex]?.subSection?.length - 1  && currentSectionIndex === courseSectionData?.length - 1) {
        // console.log("last lecture");
        return true;
      }else {
        // console.log("not last lecture");
        return false;
      }
  }
  
  
  const isFirstLecture = () => {
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection:any) => subsection._id === subsectionId);
    if (currentSubsectionIndex === 0  && currentSectionIndex === 0) {
      // console.log("first lecture");
      return true;
    }else {
      // console.log("not first lecture");
      return false;
    }
  }

  const nextLecture = () => {
    if (isLastLecture()) {
      return;
    }
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection:any) => subsection._id === subsectionId);
    if (currentSubsectionIndex === courseSectionData[currentSectionIndex]?.subSection.length - 1) {
      const nextSectionId = courseSectionData[currentSectionIndex + 1]?._id;
      const nextSubsectionId = courseSectionData[currentSectionIndex + 1]?.subSection[0]._id;
      navigate.push(`/view-course/${courseId}/${nextSectionId}/${nextSubsectionId}`);
    }else {
      const nextSectionId = courseSectionData[currentSectionIndex]._id;
      const nextSubsectionId = courseSectionData[currentSectionIndex].subSection[currentSubsectionIndex + 1]._id;
      navigate.push(`/view-course/${courseId}/${nextSectionId}/${nextSubsectionId}`);
    }
  }

  const previousLecture = () => {
    if (isFirstLecture()) {
      return;
    }
    const currentSectionIndex = courseSectionData?.findIndex((section) => section._id === sectionId);
    const currentSubsectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((subsection:any) => subsection._id === subsectionId);
    if (currentSubsectionIndex === 0) {
      const previousSectionId = courseSectionData[currentSectionIndex - 1]._id;
      const previousSubsectionId = courseSectionData[currentSectionIndex - 1]?.subSection[courseSectionData[currentSectionIndex - 1].subSection.length - 1]._id;
      navigate.push(`/view-course/${courseId}/${previousSectionId}/${previousSubsectionId}`);
    }else {
      const previousSectionId = courseSectionData[currentSectionIndex]?._id;
      const previousSubsectionId = courseSectionData[currentSectionIndex]?.subSection[currentSubsectionIndex - 1]._id;
      navigate.push(`/view-course/${courseId}/${previousSectionId}/${previousSubsectionId}`);
    }
  }


  const handleLectureCompletion = async () => {
    const res = await markLectureAsComplete({
      userId: user._id,
      courseId: courseId,
      subSectionId: subsectionId,
    }, token);
    (setCompletedLectures([...completedLectures, videoData._id]));
    console.log("lecture completed", completedLectures);
  }

  //set video end to false when .play() is called
 
   
  return (
    <div className='md:w-[calc(100vw-320px)] w-screen p-3'>
      {
        !videoData ? <h1>Loading...</h1> :
        (
          <div className="w-full relative ">
            <Player 
              ref={playerRef}
              src={videoData.videoUrl}
              aspectRatio="16:9"
              fluid={true}
              autoPlay={false}
              onEnded={() => setVideoEnd(true)}
            >
              
              <BigPlayButton position="center" />

              <LoadingSpinner />
              <ControlBar>
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <ReplayControl seconds={5} order={7.1} />
              <ForwardControl seconds={5} order={7.2} />
              <TimeDivider order={4.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              </ControlBar>
              {
                videoEnd && (
                  <div className='flex justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    {
                      !completedLectures.includes(videoData._id) && (
                        <button onClick={()=>{handleLectureCompletion()}} className='bg-yellow-100 text-richblack-900 absolute top-[20%] hover:scale-90 z-20 font-medium md:text-sm px-4 py-2 rounded-md'>Mark as Completed</button>
                      )
                    }
                  </div>
                  {
                    !isFirstLecture() && (
                      <div className=' z-20 left-0 top-1/2 transform -translate-y-1/2 absolute m-5'>
                        <BiSkipPreviousCircle onClick={previousLecture} className=" text-2xl md:text-5xl bg-richblack-600 rounded-full cursor-pointer hover:scale-90"/>
                        {/* <button onClick={previousLecture} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Previous Lecture</button> */}
                      </div>
                    )

                  }
                  {
                    !isLastLecture() && (
                      <div className=' z-20 right-4 top-1/2 transform -translate-y-1/2 absolute m-5'>
                        <BiSkipNextCircle onClick={nextLecture} className="text-2xl md:text-5xl bg-richblack-600 rounded-full cursor-pointer hover:scale-90"/>
                        {/* <button onClick={nextLecture} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Next Lecture</button> */}
                        </div>
                    )
                  }
                  {
                    <MdOutlineReplayCircleFilled onClick={() =>{ playerRef.current?.seek(0);playerRef.current?.play();setVideoEnd(false)}} className="text-2xl md:text-5xl bg-richblack-600 rounded-full cursor-pointer hover:scale-90 absolute top-1/2 z-20"/>
                  }
                  </div>
                )
              }             
            </Player>
          </div>
        )
      }
      {/* video title and desc */}
      <div className='mt-5'>
        <h1 className='text-2xl font-bold text-richblack-25'>{videoData?.title}</h1>
        <p className='text-gray-500 text-richblack-100'>{videoData?.description}</p>
        </div>
    </div>
  )
}

export default VideoDetails