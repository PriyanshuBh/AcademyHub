"use client";
import React, { useEffect } from "react";
import OTPInput from "react-otp-input";

import { signUp } from "@/services/operations/authApi";

import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const VerifyOtp = () => {
  const [otp, setOtp] = React.useState("");

  const navigate = useRouter();

  const { loading, signupData } = useAuthStore();

  useEffect(() => {
    if (!signupData) {
      navigate.push("/signup");
    }
  }, []);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log("verify-email", signupData);
    if (signupData) {
      const {
        email,
        accountType,
        confirmPassword,
        password,
        lastName,
        firstName,
      } = signupData;

      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate.push
      );
    }
  };

  return loading ? (
    <div className=" h-[100vh] flex justify-center items-center">
      <div className="custom-loader"></div>
    </div>
  ) : (
    <div>
      <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleOnSubmit}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              inputStyle="w-[20px] rounded-[8px] border-[1px] border-richblack-500 text-[3rem] text-center"
              // focusStyle="border-[5px] border-red-500"
              // isInputNum={true}

              shouldAutoFocus={true}
              containerStyle="flex justify-between gap-4"
              renderInput={(props) => (
                <input {...props} className="bg-richblack-800" />
              )}
            />

            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
