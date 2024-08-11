import React from "react";
import StatItem from "./StatItem";
import mask_group from "@/image/mask_group.png";
import Image from "next/image";
import Ellipse_3 from "@/image/avatar.png";
import Verified from "@/svg/verified.svg";
import Fber_new from "@/svg/fiber_new.svg";

const ProfileCard = () => {
  const stats = [
    { label: "Posts", value: 224 },
    { label: "Followers", value: 10.624 },
    { label: "Following", value: 1.125 },
  ];
  return (
    <article className="relative justify-between flex flex-col pb-[11px] w-[350px] h-[200px] text-sm text-center whitespace-nowrap bg-white rounded-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] text-zinc-500">
      <Image
        src={mask_group}
        alt=""
        className="object-contain w-full rounded-none h-[100px]"
      />
      <div className="absolute top-1/2 -translate-y-1/2 flex gap-[11px] size-[75px] start-[15px]">
        <Image src={Ellipse_3} className="w-full" alt="person" />
      </div>
      <div className="flex flex-col items-start ms-[101px] pt-1">
        <div className="flex gap-[3px] items-center">
          <span className="font-semibold text-base text-black mpt-1 leading-[0px]">
            Ibrahim Adm
          </span>
          <div className="flex gap-2 items-center">
            <Verified />
            <Fber_new />
          </div>
        </div>
        <span className="text-secondary size-sm">Graphic Designer</span>
      </div>
      <div className="flex gap-5 justify-between self-center max-w-full w-[274px] mt-auto">
        {stats.map((stat, index) => (
          <StatItem key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </article>
  );
};

export default ProfileCard;
