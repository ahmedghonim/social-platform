import React from "react";
import Logo from "@/svg/DZNEER_LOGO.svg";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";
import Notifications from "@/svg/notifications_active.svg";
import Forum from "@/svg/forum.svg";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between  pt-[7px] pb-[8px] w-full h-[55px] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] pe-[35px] ps-[66px] max-md:max-w-full">
      <Logo />
      <div className="flex flex-wrap gap-[73px] items-center max-md:max-w-full">
        <Navigation />
        <div className="flex items-center gap-[67px]">
          <div className="p-1 rounded-full border-[2px] border-[#D9D9D9] aspect-square size-8 flex flex-col items-center text-sm leading-[11px] text-secondary font-semibold">
            <span>99</span>
            <span className="text-[#9A9A9A] text-[10.3px]">min</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <SearchBar />
            <div className="relative">
              <Forum />
              <span className="bg-primary rounded-full size-[5px] absolute top-0 end-0"></span>
            </div>
            <div className="relative">
              <Notifications />
              <span className="bg-primary rounded-full size-[16px] absolute -top-1 -end-1 text-white text-[13px] font-semibold flex justify-center items-center">
                8
              </span>
            </div>
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
