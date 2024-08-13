import React from "react";
import InteractionItem from "./InteractionItem";

interface InteractionBarProps {
  interactions: {
    comments: number;
    views: number;
    likes: number;
    appreciations: number;
  };
}

const InteractionBar: React.FC<InteractionBarProps> = ({ interactions }) => {
  const interactionItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03943e53d19a83916681c7886380cd526e48e16b2442483f6ab7859e5b35ae62?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
      label: "Comment",
      value: interactions.comments,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6694d76c41d719f3801954894cf2ce459515255e64f05efc3220a3d1a3597a0?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
      label: "View",
      value: interactions.views,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49e65bf74a29cfb53a441207d95fa75fb59f05ad167a04394adc8a83e817597a?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
      label: "Like",
      value: interactions.likes,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f640633b658277676c3f738534923643909bd9b9d862b693a30b3c2837a140de?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
      label: "Appreciate",
      value: interactions.appreciations,
    },
  ];

  return (
    <div className="flex xl:gap-5 justify-between items-start pb-px mt-2.5 max-w-full text-sm text-center min-h-[44px] text-neutral-700 w-[570px]">
      {interactionItems.map((item, index) => (
        <InteractionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default InteractionBar;
