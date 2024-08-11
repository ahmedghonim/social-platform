import React from "react";

interface HashtagItemProps {
  icon?: string;
  hashtag: string;
  postCount: string;
}

const HashtagItem: React.FC<HashtagItemProps> = ({
  icon,
  hashtag,
  postCount,
}) => {
  return (
    <div className="flex gap-5 justify-between items-center  w-full">
      <div className="flex gap-[11px] items-center  text-base leading-none whitespace-nowrap">
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        )}
        <div>#{hashtag}</div>
      </div>
      <div className=" whitespace-nowrap text-xs px-3 py-0.5 text-center bg-[#F0F2F5] rounded-[24px]">
        {postCount}
      </div>
    </div>
  );
};

export default HashtagItem;
