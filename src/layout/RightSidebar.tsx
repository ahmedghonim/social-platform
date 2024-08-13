import React from "react";
import Avatar from "./Avatar";
import Person_search from "@/svg/person_search.svg";
import AvatarImage from "@/image/avatar.png";
import Avatar2Image from "@/image/avatar_2.png";
import Chat_bubble from "@/svg/chat_bubble.svg";
import Group_add from "@/svg/group_add.svg";
const avatarData = [
  {
    src: AvatarImage,
    alt: "User avatar 6",
    active: true,
  },
  {
    src: Avatar2Image,
    alt: "User avatar 7",
    active: true,
  },
  {
    src: AvatarImage,
    alt: "User avatar 8",
  },
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col pt-[15px] xl:gap-[15px] justify-evenly z-[-1] pb-11 w-[100px] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] max-md:hidden">
      <nav className="flex flex-col items-start gap-[15px] px-[15px]">
        <div className=" w-[50px] h-[50px]  rounded-full flex justify-center items-center bg-[#ECECEC]">
          <Chat_bubble />
        </div>
        <div className=" w-[50px] h-[50px]  rounded-full flex justify-center items-center bg-[#ECECEC]">
          <Group_add />
        </div>
      </nav>
      <hr className="h-px bg-black" />
      <nav className="flex flex-col items-start px-[15px] gap-[15px]">
        {avatarData.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            active={avatar.active}
          />
        ))}
      </nav>
      <div className=" w-[50px] mx-[15px] h-[50px] mt-auto  rounded-full flex justify-center items-center bg-[#ECECEC]">
        <Person_search className="fill-[#1C1B1F] " />
      </div>
    </aside>
  );
};

export default RightSidebar;
