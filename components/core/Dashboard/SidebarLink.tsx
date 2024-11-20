import React from "react";

import { useRouter,usePathname } from 'next/navigation';
import useCourseStore from "@/store/useCourseStore";
import Link from "next/link";

interface sidebarlinkProps {
  path: string;
  name: string;

 

  iconName: React.ElementType;
}

const SidebarLink = ({ path, name, iconName:Icon }: sidebarlinkProps) => {

    const router = useRouter();
    const pathname= usePathname();
  const { setEditCourse } = useCourseStore();



  const matchRoute = (route: string) => {
    return pathname === route;
  };

  return (
    <Link
      href={path}
      className={` py-2 px-4 relative md:px-8 md:py-2 text-sm font-medium transition-all duration-300 ${
        matchRoute(path) ? "bg-yellow-800" : "bg-opacity-0"
      }`}
    >
      <div
        className="flex item-center  gap-x-2 flex-col md:flex-row"
        onClick={() => {
          setEditCourse(false);
        }}
      >
        <Icon className="md:text-lg text-3xl" />
        <span className="hidden md:block">{name}</span>
        <span
          className={`absolute bottom-0 left-0 md:top-0 h-[0.2rem] w-full md:h-full md:w-[0.2rem] bg-yellow-50 opacity-0 transition-all duration-300
                  ${matchRoute(path) ? "opacity-100" : "opacity-0"}`}
        ></span>
      </div>
    </Link>
  );
};

export default SidebarLink;
