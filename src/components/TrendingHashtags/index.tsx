import React from "react";
import HashtagItem from "./HashtagItem";
import HashtagItemWithLanguage from "./HashtagItemWithLanguage";

interface TrendingHashtag {
  icon?: string;
  hashtag: string;
  postCount: string;
  language?: string;
}

const trendingHashtags: TrendingHashtag[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a80454ee0529a536c6eabe39c2fac6d71b9786b5eef0f313a15968a9d052b96?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "New_Social_media",
    postCount: "10M Post",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2745ba570e4413a4f8b2bbd66bf09cbf19748268b6a30a260af181c845545ebb?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "video_Games",
    postCount: "500k Post",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f33d7683fee8ff9a2c739bd7a77f0e5decaa824a54d153e1de8eab0a27388e1?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "social_platform",
    postCount: "145k Post",
  },
  { language: "EN", hashtag: "one_ummah", postCount: "125k Post" },
  { language: "EN", hashtag: "new_social_platform", postCount: "123k Post" },
  { language: "EN", hashtag: "new_social_platform", postCount: "120k Post" },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd5abe79a329a0a31cabedfe9d12a3d4bd53717d2a97cf727c1e81d04809e74e?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "Trend_Hashtag_ABCDE...",
    postCount: "105k Post",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40ef9db76ff1d26f9850eb7b7d02a34c39e28dfe3e8782221b1167a0aa57e188?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "new_social_platform",
    postCount: "25k Post",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b1942e85438e1c5c2570ab63ab5d622233840530c1d81697c5f6094b8abff4a?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    hashtag: "new_social_platform",
    postCount: "15k Post",
  },
];

const TrendingHashtags: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 px-[15px] py-4 w-full text-black bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <h2 className="self-start text-base font-bold">Trending Hashtages</h2>
      {trendingHashtags.map((hashtag, index) => (
        <React.Fragment key={index}>
          {hashtag.language ? (
            <HashtagItemWithLanguage
              language={hashtag.language}
              hashtag={hashtag.hashtag}
              postCount={hashtag.postCount}
            />
          ) : (
            <HashtagItem
              icon={hashtag.icon}
              hashtag={hashtag.hashtag}
              postCount={hashtag.postCount}
            />
          )}
          {(index === 2 || index === 5) && (
            <hr className="h-px bg-[#BBBBBB] border border-[#BBBBBB]" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default TrendingHashtags;
