import { useTranslations } from "next-intl";
import React from "react";
import Avatar from "@/image/avatar.png";
import Image from "next/image";
const UserProfile: React.FC = () => {
  const t = useTranslations("common");
  return (
    <>
      <Image
        loading="lazy"
        src={Avatar}
        alt="User avatar"
        className="object-contain xl:hidden shrink-0 w-10 aspect-square"
      />
      <div className="xl:flex hidden gap-1.5 w-[120px] self-stretch text-black whitespace-nowrap bg-gray-200 rounded-3xl pe-6 ">
        <Image
          loading="lazy"
          src={Avatar}
          alt="User avatar"
          className="object-contain shrink-0 w-10 aspect-square"
        />
        <div className="my-auto py-[10px]">{t("Ibrahim")}</div>
      </div>
    </>
  );
};

export default UserProfile;
