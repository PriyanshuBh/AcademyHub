import React from 'react'
import useAuthStore from "@/store/useAuthStore"

import { useRouter } from "next/navigation";


const PrivateRoute = ({children}:any) => {

    const { token } = useAuthStore();
const Navigate = useRouter();

    if(token !== null)
        return children
    else{
        // return <Navigate to="/login" />
        Navigate.push("/login" );
        return;}

}

export default PrivateRoute
