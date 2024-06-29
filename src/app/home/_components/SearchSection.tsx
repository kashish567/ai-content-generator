import { Search } from "lucide-react";
import React from "react";

const SearchSection = () => {
  return (
    <div
      className="p-10 bg-gradient-to-br from-purple-500
             via-purple-700 to-blue-600 flex flex-col 
             justify-center items-center text-white"
    >
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="flex w-full justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md my-5 w-[50%] bg-white">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
