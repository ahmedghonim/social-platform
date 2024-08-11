import React from "react";

interface StatItemProps {
  label: string;
  value: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-black font-semibold text-base !leading-[0px]">
        {value}
      </span>
      <span className="text-secondary text-sm">{label}</span>
    </div>
  );
};

export default StatItem;
