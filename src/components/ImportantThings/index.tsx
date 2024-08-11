import React from "react";
import TaskItem, { TaskItemProps } from "./TaskItem";

const ImportantThings = () => {
  const tasks: TaskItemProps[] = [
    {
      text: "Read pages 20 from marketing book",
      isCompleted: true,
    },
    {
      text: "important task to get done today",
      isCompleted: false,
    },
    {
      text: "Here is an example of putting long tasks that skip the first line",
      isCompleted: true,
    },
  ];
  return (
    <section className="flex flex-col px-4 py-4 text-base text-black bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <h2 className="self-start text-base font-semibold">
        3 Important Things To get done today
      </h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} {...task} />
      ))}
      <button className="self-center mt-5 text-sm font-semibold text-center text-indigo-500">
        View the calendar
      </button>
    </section>
  );
};

export default ImportantThings;
