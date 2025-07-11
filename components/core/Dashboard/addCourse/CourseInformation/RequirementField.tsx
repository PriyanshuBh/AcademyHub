import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form';
import useCourseStore from '@/store/useCourseStore';
interface requireProps{
    name:string;
    label :string;
    register:any;
    errors:any;
    setValue:any;
    getValues:any
}

const RequirementField = ({name, label, register, errors, setValue, getValues}:requireProps) => {
    const [requirement, setRequirement] = useState<any>("");
    const [requirementList, setRequirementList] = useState<any>([]);
    const {editCourse, course} = useCourseStore();


    useEffect(()=> {
        register(name, {
            required:true,
            // validate: (value) => value.length > 0
        })
    },[])

    useEffect(()=> {
        setValue(name, requirementList);
        if(editCourse) {
            setRequirementList(course?.instructions);
            setValue(name, course?.instructions);
        }
    },[requirementList])

    const handleAddRequirement = () => {
        if(requirement) {
            setRequirementList([...requirementList, requirement]);
            setRequirement("");
        }
    }

    const handleRemoveRequirement = (index:any) => {
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList);
    }

  return (
    <div className=''>

        <label className='text-sm text-richblack-5' htmlFor={name}>{label}<sup className='text-pink-200'>*</sup></label>
        <div>
            <input
                type='text'
                id={name}
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className='form-style w-full'
            />
            <button
            type='button'
            onClick={handleAddRequirement}
            className='font-semibold text-yellow-50 mt-3'>
                Add
            </button>
        </div>

        {
            requirementList.length > 0 && (
                <ul className='mt-2 list-inside list-disc'>
                    {
                        requirementList.map((requirement:string, index:any) => (
                            <li key={index} className='flex items-center text-richblack-5'>
                                <span>{requirement}</span>
                                <button
                                type='button'
                                onClick={() => handleRemoveRequirement(index)}
                                className='ml-2 text-xs text-pure-greys-300 '>
                                    clear
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
        {errors[name] && (
            <span className='ml-2 text-xs tracking-wide text-pink-200'>
                {label} is required
            </span>
        )}
      
    </div>
  )
}

export default RequirementField
