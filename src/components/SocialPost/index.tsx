import React from "react";
import UserInfo from "./UserInfo";

import InteractionBar from "./InteractionBar";
import CommentSection from "./CommentSection";
import BookMark from "@/svg/bookmark.svg";
import More from "@/svg/more_vert.svg";
import Image from "next/image";
interface SocialPostProps {
  user: {
    name: string;
    role: string;
    timeAgo: string;
    avatar: any;
  };
  content: string;
  image?: any;
  children?: React.ReactNode;
  interactions: {
    comments: number;
    views: number;
    likes: number;
    appreciations: number;
  };
  noComments?: boolean;
}

const SocialPost: React.FC<SocialPostProps> = ({
  user,
  content,
  image,
  interactions,
  children,
  noComments,
}) => {
  return (
    <article className="flex flex-col items-center p-[15px] w-full bg-white rounded-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <div className="flex gap-5 justify-between w-full">
        <UserInfo user={user} />
        <div className="flex self-start">
          <BookMark className="fill-[#414142]" />
          <More className="ms-6" />
        </div>
      </div>
      <p className="mt-2.5 text-base text-black max-md:max-w-full me-auto">
        {content}
      </p>
      {children && <div className="mt-2.5">{children}</div>}
      {image && (
        <Image
          src={image}
          className="object-contain mt-2.5 max-w-full rounded-2xl aspect-square w-[600px]"
          alt="Post content"
        />
      )}
      <InteractionBar interactions={interactions} />
      {!noComments && <CommentSection />}
    </article>
  );
};

export default SocialPost;
