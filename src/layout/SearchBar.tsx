import React from "react";

const SearchBar: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-start self-stretch px-5 py-2 w-[350px] text-base bg-gray-200 rounded-3xl max-md:pr-5">
      <div className="flex gap-2 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/562ea66b229f5401927f3224498bd88757cfe180bda87ef83f676ac4423636ba?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
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
