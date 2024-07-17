"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      {/* search section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* template list section */}
      <TemplateListSection userSearchInput={userSearchInput} />
 
    </div>
  );
};

export default page;
