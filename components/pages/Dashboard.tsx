import React from 'react'

import {Outlet} from "react-router-dom"
import Sidebar from '../../components/core/Dashboard/Sidebar'
import useAuthStore from '@/store/useAuthStore'
import useProfileStore from '@/store/useProfileStore'

const Dashboard = () => {

    const {loading: authLoading} =useAuthStore();
    const {loading: profileLoading} = useProfileStore();



    if(profileLoading || authLoading) {
        return (
            <div className='mt-10'>
                Loading...
            </div>
        )
    }


  return (
    <div className='relative flex bg-richblack-400'>
        <Sidebar />
        <div className=' flex-1 overflow-auto bg-richblack-900'>
            <div className='py-10'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
