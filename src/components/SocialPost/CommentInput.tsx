import React from "react";
import Mic from "@/svg/mic.svg";
import Avatar from "@/image/Ellipse.png";
import Photo from "@/svg/photo.svg";
import Send from "@/svg/send.svg";
import SentimentSatisfied from "@/svg/sentiment_satisfied.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface CommentInputProps {
  avatarSrc: string;
  placeholderText: string;
  actionIconSrc: string;
}

const CommentInput: React.FC<CommentInputProps> = ({
  avatarSrc,
  placeholderText,
  actionIconSrc,
}) => {
  const t = useTranslations("common");
  return (
    <form className="flex flex-wrap gap-5 justify-between bg-[#ECECEC] py-1.5 pr-3.5 pl-1.5 w-full text-base rounded-3xl text-secondary max-md:max-w-full">
      <div className="flex gap-2.5">
        <Image
          loading="lazy"
          src={Avatar}
          alt=""
          className="object-contain shrink-0 rounded-full aspect-square w-[30px]"
        />
        <div className="bg-secondary w-px h-full" />
        <label htmlFor="commentInput" className="sr-only">
          {t("Write a comment")}
        </label>
        <input
          type="text"
          id="commentInput"
          className="flex-auto my-auto bg-transparent outline-none"
          placeholder={placeholderText}
        />
      </div>
      <div className="flex gap-2 items-center">
        <SentimentSatisfied />
        <Photo />
        <Mic />
        <Send />
      </div>
    </form>
  );
};

export default CommentInput;
