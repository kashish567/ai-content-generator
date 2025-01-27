import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md bg-white">
        <Search />
        <input type="text" placeholder="Search.." className="outline-none" />
      </div>
      <div>
        <h2 className="bg-primary p-3 rounded-full text-xs text-white">
          Join Membership just for $9.99/Month
        </h2>
      </div>
    </div>
  );
};

export default Header;
