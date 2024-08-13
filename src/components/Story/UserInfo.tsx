import React from "react";
import Verified from "@/svg/verified.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface UserInfoProps {
  avatar: any;
  username: string;
  isVerified: boolean;
  postTime: string;
  off?: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({
  avatar,
  username,
  isVerified,
  postTime,
  off,
}) => {
  return (
    <div
      className={cn("flex gap-[11px] items-center text-sm", {
        "flex-col gap-0": off,
      })}
    >
      <div
        className={cn("flex gap-[9px] font-semibold items-center text-white", {
          "flex-col": off,
        })}
      >
        <Image
          loading="lazy"
          src={avatar}
          alt={`${username}'s avatar`}
          className={cn(
            "object-contain shrink-0 w-8 rounded-full aspect-square",
            {
              "size-[50px]": off,
            }
          )}
        />
        <div className="flex gap-1 items-center">
          <span className="self-stretch">{username}</span>
          {isVerified && <Verified className="w-5 fill-white" />}
        </div>
      </div>
      <time className="text-[#D9D9D9] text-sm">{postTime}</time>
    </div>
  );
};

export default UserInfo;
