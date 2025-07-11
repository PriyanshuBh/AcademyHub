 "use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';


import { COURSE_STATUS } from '../../../../utils/constants';
import { addCourseToCategory, editCourseDetails } from '../../../../services/operations/courseDetailsAPI';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import useAuthStore from '@/store/useAuthStore';
import useCourseStore from '@/store/useCourseStore';
import { useRouter } from 'next/navigation';

const PublishCourse = () => {
    const { setCourse, setEditCourse, setStep } =useCourseStore();
    const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm();
    const {token} = useAuthStore();
    const {course} = useCourseStore();
    const [loading, setLoading] = useState(false);
  
    const navigate = useRouter();

    useEffect(() => {
        if(course?.status=== COURSE_STATUS.PUBLISHED) {
            setValue("public", true);
        }
    },[]);

    const goBack = () => {
        (setStep(2));
    }

    const goToMyCourses = () => {
        navigate.push("/dashboard/my-courses");
    }

    const handelPublish = async () => {
        if((course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true) ||( course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)) {
            goToMyCourses();
            setLoading(false);
            setStep(1);
        //    setEditCourse(null);
        setEditCourse(false);

            return;
        }
        const formData = new FormData();
        formData.append("courseId", course._id);
        formData.append("status", getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT);
        const result = await editCourseDetails(formData, token??"");
        const category_id= await course.category;
        console.log("category_id",category_id);
        const addCourseCategory = await addCourseToCategory({categoryId:category_id,courseId:course._id},token);
        if(result && addCourseCategory) {
            goToMyCourses();
        } else {
            toast.error("Something went wrong");
        }
        if(addCourseCategory) {
        setStep(1);
        // setEditCourse(null);
        setEditCourse(false);

        setLoading(false);
        }
    }
        

    const onSubmit = () => {
        setLoading(true);
        // handelPublish(data);
        handelPublish();

    }

  return (
    <div>
        <div className='rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6'>
            <p className='text-2xl font-semibold text-richblack-5' >Publish Settings</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='my-6 mb-8'>
            <label htmlFor="public" className="inline-flex items-center text-lg">
                <input defaultChecked={false} type="checkbox" id="public" className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5" {...register("public")} />
                <span className="ml-2 text-richblack-400">Make this course as public</span>
            </label>
            </div>
            <div className="ml-auto flex max-w-max items-center gap-x-4">
                <button disabled={loading} onClick={goBack} type="button" className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900">Back</button>
                <button disabled={loading} type='submit' className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 undefined">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PublishCourse