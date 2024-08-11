import Image from "next/image";
import React from "react";

interface UserInfoProps {
  user: {
    name: any;
    role: string;
    timeAgo: string;
    avatar: string;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div className="flex gap-4 items-center min-h-[50px]">
      <Image
        src={user.avatar}
        className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px]"
        alt={`${user.name}'s avatar`}
      />
      <div className="flex flex-col self-stretch my-auto">
        <div className="flex gap-1 items-end text-base font-semibold">
          <div className="text-black">{user.name}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62464e18dd4a2e1b56ca964f3b70ce8bdeba06ecaf344d49f5856278968f338e?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070"
            className="object-contain shrink-0 w-5 aspect-square"
            alt=""
          />
          <div className="text-indigo-500"> • Follow</div>
        </div>
        <div className="text-sm text-zinc-500">
          {user.role} • {user.timeAgo}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
