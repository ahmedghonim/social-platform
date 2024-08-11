import React from "react";
import Tag from "@/svg/tag.svg";
const TrendHashtags: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[5px] h-[50px] rounded-tr-[20px] rounded-br-[20px] bg-primary max-2xl:hidden" />
      <div className="flex flex-col justify-center items-start 2xl:self-start 2xl:px-5 2xl:py-3 p-2 w-full bg-gray-100 rounded-2xl">
        <div className="flex gap-2 items-center flex-col 2xl:flex-row text-center">
          <Tag className="2xl:fill-primary fill-[#1C1B1F]" />
          <span className="whitespace-normal 2xl:whitespace-nowrap pt-0.5 text-xs 2xl:text-base">
            Trend Hashtags
          </span>
        </div>
      </div>
      <div className="w-[6px] h-[50px] rounded-tl-[20px] rounded-bl-[20px] bg-primary  max-2xl:hidden" />
    </div>
  );
};

export default TrendHashtags;
