import React from "react";

interface ReplyCardProps {
  avatarSrc: string;
  username: string;
  content: string;
}

const ReplyCard: React.FC<ReplyCardProps> = ({
  avatarSrc,
  username,
  content,
}) => {
  return (
    <div className="flex flex-col py-2 pr-10 pl-1.5 w-full bg-gray-200 rounded-3xl max-md:pr-5">
      <div className="flex gap-5 justify-between w-full text-base font-semibold">
        <div className="flex gap-2 items-center h-[29px]">
          <img
            loading="lazy"
            src={avatarSrc}
            alt={`${username}'s avatar`}
            className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[30px]"
          />
          <div className="self-stretch my-auto">{username}</div>
        </div>
        <div className="flex shrink-0 self-start h-[18px] w-[18px]" />
      </div>
      <div className="ml-2.5 text-base">{content}</div>
    </div>
  );
};

export default ReplyCard;
