import React from "react";
import Sound from "@/svg/sound.svg";
import More from "@/svg/more_vert.svg";
import Puse from "@/svg/puse.svg";

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center">
      <Puse />
      <Sound />
      <More className="fill-white ms-1" />
    </div>
  );
};

export default ActionButtons;
