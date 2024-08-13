import React from "react";
import Send from "@/svg/send.svg";
import Favorite from "@/svg/favorite.svg";
const CommentSection: React.FC = () => {
  return (
    <section className="flex relative flex-wrap gap-3.5 px-5  pb-4 text-sm text-white rounded-none mt-auto max-md:mt-10">
      <form className="flex flex-auto gap-10 pl-5 rounded-3xl border border-white border-solid max-md:max-w-full">
        <label htmlFor="commentInput" className="sr-only">
          Reply to name of the person
        </label>
        <input
          type="text"
          id="commentInput"
          className="bg-transparent border-none text-white placeholder-white flex-grow"
          placeholder="Reply to name of the person"
        />
        <button className="flex items-center justify-center size-10 border border-white rounded-full">
          <Send className="fill-white" />
        </button>
      </form>
      <button className="flex items-center justify-center size-10 border border-white rounded-full">
        <Favorite />
      </button>
    </section>
  );
};

export default CommentSection;
