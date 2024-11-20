"use client";
import React, { useState } from "react";

import { sidebarLinks } from "@/lib/data/dashboard-links";
import { logout } from "@/services/operations/authApi";

import SidebarLink from "./SidebarLink";

import { VscSignOut, VscSettingsGear } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";

import useAuthStore from "@/store/useAuthStore";
import useProfileStore from "@/store/useProfileStore";
import { useRouter } from "next/navigation";

type ConfirmationModalState = {
    text1: string;
    text2: string;
    btn1Text: string;
    btn2Text: string;
    btn1Handler: () => void;
    btn2Handler: () => void;
  } | null;
const Sidebar = () => {
  const { user, loading: profileLoading } = useProfileStore();
  const { loading: authLoading } = useAuthStore();

  const navigate = useRouter();
  const [confirmationModal, setConfirmationModal] = useState<ConfirmationModalState>(null);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className=" text-white bg-richblack-800">
      <div
        className="hidden min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 lg:flex
        h-[calc[100vh-3.5rem)] bg-richblack-800 py-10"
      >
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink
                key={link.id}
                path={link.path}
                name={link.name}
                iconName={link.icon}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

        <div className="flex flex-col">
          <SidebarLink
            name="Settings"
            path="/dashboard/settings"
            iconName={VscSettingsGear}
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are You Sure ?",
                text2: "You will be logged out of your Account",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => logout(navigate.push),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="text-sm font-medium text-richblack-300 mx-4 my-4"
          >
            <div className="flex items-center gap-x-2 p-4">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      {/* mobile sidebar */}
      <div className="flex lg:hidden fixed bottom-0 justify-between items-center px-2 py-1 bg-richblack-900 z-50 w-full">
        <div className="flex flex-row gap-1 w-full justify-between">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink
                key={link.id}
                path={link.path}
                name={link.name}
                iconName={link.icon}
              />
            );
          })}
          <SidebarLink
            name="Settings"
            path="/dashboard/settings"
            iconName={VscSettingsGear}
          />
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;
