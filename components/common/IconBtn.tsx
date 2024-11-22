import React, { ReactNode,MouseEventHandler } from "react";
import { FiEdit } from "react-icons/fi";

interface IconBtnProps {
  text: string;
  onclick?:  MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  customClasses?: string;
  type?: "button" | "submit" | "reset";
}

const IconBtn = ({
  text,
  onclick,
  children,
  disabled = false,
  outline = false,
  customClasses = "",
  type = "button",
}: IconBtnProps) => {
  return (
    <button
      className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 text-sm md:text-lg px-3 md:px-5 font-semibold text-richblack-900 undefined"
      disabled={disabled}
      onClick={onclick}
      type={type}
    >
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
      <FiEdit />
    </button>
  );
};

export default IconBtn;
