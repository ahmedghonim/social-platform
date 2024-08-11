import React from "react";
import Tag from "@/svg/tag.svg";
const TrendHashtags: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[5px] h-[50px] rounded-tr-[20px] rounded-br-[20px] bg-primary" />
      <div className="flex flex-col justify-center items-start self-start px-5 py-3 w-full bg-gray-100 rounded-2xl">
        <div className="flex gap-2 items-center">
          <Tag />
          <div className="self-stretch my-auto">Trend Hashtags</div>
        </div>
      </div>
      <div className="w-[6px] h-[50px] rounded-tl-[20px] rounded-bl-[20px] bg-primary" />
    </div>
  );
};

export default TrendHashtags;
