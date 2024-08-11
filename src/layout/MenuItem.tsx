import React from "react";

interface MenuItemProps {
  icon: string;
  label: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, className = "" }) => {
  const Icon: any = icon;
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <Icon className="fill-primary" />
      <div className="self-stretch my-auto whitespace-nowrap">{label}</div>
    </div>
  );
};

export default MenuItem;
