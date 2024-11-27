import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import useCourseStore from '@/store/useCourseStore';
interface chipProps {
    name :string;
    label:string;
    setValue:any;
    register:any;
    errors:any
}

const ChipInput = ({name, label, register, errors, setValue}:chipProps) => {
    const [tags, settags] = useState<any>([])
    const {editCourse, course} = useCourseStore();

    

    useEffect(()=> {
        register(name, {
            required:true,
            // validate: (value) => value.length > 0
   
        });
        if(editCourse ) {
            settags(JSON.parse(course?.tag));
            setValue(name, JSON.parse(course?.tag));
        }
    },[])

  return (
    <div>
        <label className='text-sm text-richblack-5' htmlFor={name}>{label}<sup className='text-pink-200'>*</sup></label>
        <div className='flex flex-wrap gap-2 m-2'>
            {
                tags.map((tag:any, index:any) => (
                    <div key={index} className='m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5'>
                        <span className='text-richblack-5'>{tag}</span>
                        <button
                        type='button'
                        onClick={() => {
                            const updatedTags = [...tags];
                            updatedTags.splice(index, 1);
                            settags(updatedTags);
                            setValue(name, updatedTags);
                        }}
                        className='ml-2 text-richblack-5'>
                            <FaTimes/>
                        </button>
                        </div>
                ))
            }
    </div>
    <input
        type='text'
        id={name}
        placeholder='Press Enter or , to add a tag'
        className='form-style w-full'
        onKeyDown={(e:any) => {
            if(e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                if(e.target.value) {
                    settags([...tags, e.target.value]);
                    setValue(name, [...tags, e.target.value]);
                    e.target.value = "";
                }
            }
        }}
    />
    {
        errors[name] && <span className='text-xs text-pink-200'>Tags are required</span>
        
    }

    </div>
  )
}

export default ChipInput;