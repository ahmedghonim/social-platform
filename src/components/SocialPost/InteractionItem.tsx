import React from "react";

interface InteractionItemProps {
  icon: string;
  label: string;
  value: number;
}

const InteractionItem: React.FC<InteractionItemProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-col xl:text-sm text-2.5">
      <img
        loading="lazy"
        src={icon}
        className="object-contain self-center w-6 aspect-square"
        alt=""
      />
      {value.toLocaleString()}k {label}
    </div>
  );
};

export default InteractionItem;
