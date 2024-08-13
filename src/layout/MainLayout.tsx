import React from "react";
import Header from "./Header";
import { getTranslations } from "next-intl/server";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Frame from "@/svg/Frame.svg";
import Navigation from "./Navigation";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <main className="h-screen flex flex-col relative overflow-hidden">
      <Header />
      <div className="flex h-[calc(100vh-55px)]  ">
        <div className="mr-auto z-[-1] xl:block hidden ">
          <Sidebar />
        </div>
        <div className="h-full overflow-y-auto hidden-scrollbar py-[20px] max-sm:b-[50px]">
          {children}
        </div>
        <RightSidebar />
      </div>
      <div className="z-50 xl:hidden fixed bottom-0 bg-white w-full px-[74px] py-[5px]">
        <Navigation />
      </div>
      <div className="absolute xl:bottom-[48px] xl:end-[131px] end-[15px] bottom-[15px] cursor-pointer active:scale-95">
        <Frame className="x:size-[60px] size-[65]" />
      </div>
    </main>
  );
};

export default MainLayout;
