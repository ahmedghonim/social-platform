import React from "react";
import MenuItem from "./MenuItem";
import TrendHashtags from "./TrendHashtags";
import Home from "@/svg/home.svg";
import Bookmark from "@/svg/bookmark.svg";
import Group from "@/svg/group.svg";
import Feed from "@/svg/feed.svg";
import Event from "@/svg/event.svg";
import Person_search from "@/svg/person_search.svg";
import Work from "@/svg/work.svg";
import Volunteer_activism from "@/svg/volunteer_activism.svg";
import Ads_click from "@/svg/ads_click.svg";
import workspace_premium from "@/svg/workspace_premium.svg";
import settings from "@/svg/settings.svg";
interface MenuItemData {
  icon: string;
  label: string;
}

const menuItems: MenuItemData[] = [
  {
    icon: Bookmark,
    label: "Saved Posts",
  },
  {
    icon: Group,
    label: "Groups",
  },
  {
    icon: Feed,
    label: "Blogs",
  },
  {
    icon: Event,
    label: "Events",
  },
  {
    icon: Person_search,
    label: "Find friends",
  },
  {
    icon: Work,
    label: "Job Search",
  },
  {
    icon: Volunteer_activism,
    label: "Donation",
  },
  {
    icon: Ads_click,
    label: "Create advertise",
  },
  {
    icon: workspace_premium,
    label: "Upgrade membership",
  },
];

const Sidebar: React.FC = () => {
  return (
    <nav className=" w-[80px] flex 2xl:w-fit flex-col gap-8 z-[1] overflow-y-scroll h-full self-start pt-[50px] pb-[46px] text-base font-semibold bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)] text-neutral-700">
      <MenuItem icon={Home} label="News Feed" className="2xl:ms-10" />

      <TrendHashtags />

      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          className="2xl:ms-10"
        />
      ))}

      <MenuItem
        icon={settings}
        label="Settings"
        className="2xl:ms-10 mt-auto"
      />
    </nav>
  );
};

export default Sidebar;
