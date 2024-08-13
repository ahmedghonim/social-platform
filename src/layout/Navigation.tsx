import React from "react";
import Forum from "@/svg/forum.svg";
import { cn } from "@/lib/utils";
import Subscriptions from "@/svg/subscriptions.svg";
import Feed from "@/svg/feed.svg";
import Clarify from "@/svg/clarify.svg";
import { useTranslations } from "next-intl";
const Navigation: React.FC = () => {
  const t = useTranslations("common");

  const navItems = [
    { label: "tımelıne", active: true, icon: Clarify },
    { label: "Blogs", active: false, icon: Feed },
    { label: "videos", active: false, icon: Subscriptions },
    { label: "Messaging", active: false, icon: Forum },
  ];

  return (
    <nav className="flex xl:gap-[74px] justify-between xl:justify-normal  max-md:max-w-full items-center text-[10px]">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex  flex-col text-secondary-600 gap-1  items-center justify-center relative ${
            item.active ? "!text-primary max-sm:gap-0.5" : ""
          }`}
        >
          <span
            className={cn("", {
              " max-sm:bg-[#5E60FF]/10 rounded-[20px] px-2.5 py-1": item.active,
            })}
          >
            <item.icon
              className={cn("fill-current", {
                "fill-primary": item.active,
              })}
            />
          </span>
          <div className="uppercase">{t(item.label)}</div>
          {item.active && (
            <div className="xl:flex hidden bg-primary w-[60px] rounded-t-[20px] h-[3px] absolute bottom-[-8px] " />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
