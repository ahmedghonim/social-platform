import { useTranslations } from "next-intl";
import React from "react";

const UserProfile: React.FC = () => {
  const t = useTranslations("common");
  return (
    <div className="flex gap-1.5 w-[120px] self-stretch text-black whitespace-nowrap bg-gray-200 rounded-3xl pe-6 ">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da7b5c8915c71d417c574801fd288eb45757536d24b820b4ed7a9a1e8835adfd?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070"
        alt="User avatar"
        className="object-contain shrink-0 w-10 aspect-square"
      />
      <div className="my-auto py-[10px]">{t("Ibrahim")}</div>
    </div>
  );
};

export default UserProfile;
