import SocialPost from "@/components/SocialPost";
import ProfileCard from "@/components/home/ProfileCard";
import { useTranslations } from "next-intl";
import AvatarImage from "@/image/avatar_5.png";
import postImage from "@/image/1673107442876.png";
import TrendingHashtags from "@/components/TrendingHashtags";
import ImportantThings from "@/components/ImportantThings";
import PeopleYouMayKnow from "@/components/PeopleYouMayKnow";
import Aqsa from "@/image/aqsa.png";
import Image from "next/image";
import UsersStory from "@/components/UsersStory";
import ProductList from "@/components/ProductList";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex">
      <div className="xl:w-[630px] xl:mx-[31px] w-full space-y-[14px]">
        <UsersStory />
        <SocialPost
          noComments
          user={{
            avatar: AvatarImage,
            role: "Graphic Designer",
            name: "Ibrahim Adm",
            timeAgo: "2 hours ago",
          }}
          content={
            "Taking care of the family is one of the most important things in life. "
          }
          image={postImage}
          interactions={{
            comments: 12,
            views: 100,
            likes: 124,
            appreciations: 10,
          }}
        />
        <SocialPost
          user={{
            avatar: AvatarImage,
            role: "Graphic Designer",
            name: "Ibrahim Adm",
            timeAgo: "2 hours ago",
          }}
          content={
            "Taking care of the family is one of the most important things in life. "
          }
          image={postImage}
          interactions={{
            comments: 12,
            views: 100,
            likes: 124,
            appreciations: 10,
          }}
        />
        <SocialPost
          noComments
          user={{
            avatar: AvatarImage,
            role: "Graphic Designer",
            name: "Ibrahim Adm",
            timeAgo: "2 hours ago",
          }}
          content={
            "Taking care of the family is one of the most important things in life. "
          }
          interactions={{
            comments: 12,
            views: 100,
            likes: 124,
            appreciations: 10,
          }}
        >
          <SocialLink
            title="6 New Social Media Apps Every Business Owner Should Know"
            description="In today's world, it can be hard to know which platforms are worth your time. Stay on top of the trending social media apps and incorporate them"
            url="https//:www.Visit.the.site"
            imageSrc={Aqsa}
          />
        </SocialPost>
      </div>

      <div className="w-[350px] 2xl:me-[165px] me-[99px] xl:flex flex-col gap-5 hidden ">
        <ProfileCard />
        <div className="sticky top-0 flex flex-col gap-5">
          <TrendingHashtags />
          <ImportantThings />
          <PeopleYouMayKnow />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  title: string;
  description: string;
  url: string;
  imageSrc: any;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  title,
  description,
  url,
  imageSrc,
}) => {
  return (
    <article className="px-5 py-4 bg-gray-100 rounded-3xl max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ArticleContent title={title} description={description} url={url} />
        <ArticleImage src={imageSrc} />
      </div>
    </article>
  );
};

interface ArticleContentProps {
  title: string;
  description: string;
  url: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
        <h2 className="text-lg font-semibold text-black">
          {title}
          <span className="text-base">{description}</span>
        </h2>
        <a
          href={url}
          className="self-start mt-5 text-base text-center text-zinc-500"
        >
          {url}
        </a>
      </div>
    </div>
  );
};

interface ArticleImageProps {
  src: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ src }) => {
  return (
    <Image
      loading="lazy"
      src={src}
      alt="Social Media App Illustration"
      className="object-contain  rounded-3xl max-w-full aspect-square xl:size-[185px] w-full"
    />
  );
};
