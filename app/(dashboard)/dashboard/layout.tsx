import React, { ReactNode } from 'react'

import Sidebar from '@/components/core/Dashboard/Sidebar'
import useAuthStore from '@/store/useAuthStore'
import useProfileStore from '@/store/useProfileStore'

interface DashboardProps {
    children: ReactNode;
  }
const Dashboard: React.FC<DashboardProps> = ({ children }) => {

    const {loading: authLoading} =useAuthStore.getState();
    const {loading: profileLoading} = useProfileStore.getState();



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
            {children}
            </div>
        </div>
    </div>
  )
}

export default Dashboard
