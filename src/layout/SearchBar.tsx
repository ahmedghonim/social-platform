import React from "react";
import Search from "@/svg/search.svg";
const SearchBar: React.FC = () => {
  return (
    <form className="flex  flex-col justify-center items-start self-stretch px-5 py-2 2xl:w-[350px] xl:w-[217px] w-[10px] text-base xl:bg-gray-200 xl:rounded-3xl max-md:pr-5">
      <div className="flex gap-2 items-start">
        <Search className="max-sm:fill-[#515151] " />

        <input
          type="search"
          id="searchInput"
          placeholder="Search Dzneer"
          className=" xl:block hidden bg-transparent border-none outline-none "
        />
      </div>
    </form>
  );
};

export default SearchBar;
