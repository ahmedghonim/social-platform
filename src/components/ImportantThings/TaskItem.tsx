import { Checkbox } from "@/ui/atoms/checkbox";
import React from "react";

export interface TaskItemProps {
  text: string;
  isCompleted: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, isCompleted }) => {
  const bgColorClass = isCompleted
    ? "bg-indigo-500 bg-opacity-10"
    : "bg-gray-200";
  const textColorClass = isCompleted
    ? "text-black "
    : "text-zinc-500 line-through";

  return (
    <div
      className={`flex flex-col justify-center py-1.5 pr-2 pl-2.5 mt-2.5 w-full rounded-2xl ${bgColorClass}`}
    >
      <div className="flex gap-5 justify-between items-center max-w-full w-[303px]">
        <p className={`w-[247px] ${textColorClass}`}>{text}</p>
        <Checkbox checked={!isCompleted} />
      </div>
    </div>
  );
};

export default TaskItem;
