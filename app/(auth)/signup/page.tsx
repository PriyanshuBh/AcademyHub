 "use client"
import useAuthStore from "@/store/useAuthStore"

import Template from "../../../components/core/Auth/Template"


function Signup() {
  const {loading} = useAuthStore();
  return (
    loading?(<div className=" h-[100vh] flex justify-center items-center"><div className="custom-loader"></div></div>):(
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={"../../../public/Images/signup.webp"}
      formType="signup"
    />
    )
  )
}

export default Signup