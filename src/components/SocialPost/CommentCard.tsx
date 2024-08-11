import React from "react";
import Avatar from "@/image/Ellipse.png";
import Image from "next/image";
import ThumbsUp from "@/svg/thumb_up.svg";
import Chat from "@/svg/chat.svg";
export interface CommentCardProps {
  avatarSrc?: string;
  username: string;
  content: string;
  likes?: number;
  replies?: number;
  hiddenIcons?: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({
  avatarSrc,
  username,
  content,
  likes,
  replies,
  hiddenIcons,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col grow shrink-0 pt-1.5 pr-9 pb-3 pl-1.5 text-black bg-[#ECECEC] rounded-3xl basis-0 w-fit max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2 items-center self-start text-base font-semibold h-[29px]">
          <Image
            loading="lazy"
            src={avatarSrc || Avatar}
            alt={`${username}'s avatar`}
            className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[30px]"
          />
          <div className="self-stretch my-auto font-normal">{username}</div>
        </div>
        <div className="mt-1.5 ms-2.5 text-[15px] font-thin max-md:max-w-full">
          {content}
        </div>
      </div>
      <div className="flex flex-col -translate-x-4 mt-3.5 gap-[5px] text-xs text-[#525252]">
        {!hiddenIcons && (
          <div className="flex gap-1.5 items-center px-[9px] py-[5px] bg-white border rounded-3xl border-[#ABABAB]">
            <ThumbsUp className="object-contain shrink-0 aspect-square w-[18px]" />

            {likes && <div>{likes}k Like</div>}
          </div>
        )}
        {!hiddenIcons && (
          <div className="flex gap-1.5 items-center px-[9px] py-[5px] bg-white border rounded-3xl border-[#ABABAB]">
            <Chat className="object-contain shrink-0 aspect-square w-[18px]" />

            {replies && <div className="my-auto">{replies} Replay</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
