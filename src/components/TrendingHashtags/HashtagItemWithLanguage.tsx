import React from "react";

interface HashtagItemWithLanguageProps {
  language: string;
  hashtag: string;
  postCount: string;
}

const HashtagItemWithLanguage: React.FC<HashtagItemWithLanguageProps> = ({
  language,
  hashtag,
  postCount,
}) => {
  return (
    <div className="flex gap-5 justify-between items-center w-full">
      <div className="flex gap-[11px] items-center whitespace-nowrap">
        <div className="text-sm font-semibold">{language}</div>
        <div className="text-base leading-none">#{hashtag}</div>
      </div>
      <div className="gap-2.5 self-stretch px-3 py-0.5 text-xs text-right bg-gray-100 rounded-3xl whitespace-nowrap">
        {postCount}
      </div>
    </div>
  );
};

export default HashtagItemWithLanguage;
