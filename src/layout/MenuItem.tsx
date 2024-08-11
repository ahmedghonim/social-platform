import React from "react";

interface MenuItemProps {
  icon: string;
  label: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, className = "" }) => {
  const Icon: any = icon;
  return (
    <div
      className={`flex gap-2 items-center flex-col 2xl:flex-row text-center ${className}`}
    >
      <Icon className="2xl:fill-primary fill-[#1C1B1F]" />
      <span className="whitespace-normal 2xl:whitespace-nowrap pt-0.5 text-xs 2xl:text-base">
        {label}
      </span>
    </div>
  );
};

export default MenuItem;
