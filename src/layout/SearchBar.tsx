import React from "react";
import Search from "@/svg/search.svg";
const SearchBar: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-start self-stretch px-5 py-2 2xl:w-[350px] w-[217px] text-base bg-gray-200 rounded-3xl max-md:pr-5">
      <div className="flex gap-2 items-start">
        <Search />
        <label htmlFor="searchInput" className="sr-only">
          Search Dzneer
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="Search Dzneer"
          className="bg-transparent border-none outline-none "
        />
      </div>
    </form>
  );
};

export default SearchBar;
