import React from "react";
import Header from "./Header";
import { getTranslations } from "next-intl/server";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Frame from "@/svg/Frame.svg";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <main className="h-screen flex flex-col relative overflow-hidden">
      <Header />
      <div className="flex h-[calc(100vh-55px)]">
        <div className="mr-auto z-[-1]">
          <Sidebar />
        </div>
        <div className="h-full overflow-y-auto hidden-scrollbar py-[20px]">
          {children}
        </div>
        <RightSidebar />
      </div>
      <div className="absolute bottom-[48px] end-[131px] cursor-pointer active:scale-95">
        <Frame />
      </div>
    </main>
  );
};

export default MainLayout;
