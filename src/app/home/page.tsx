import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const page = () => {
  return <div>
    {/* search section */}
<SearchSection/>
    {/* template list section */}
    <TemplateListSection/>
  </div>;
};

export default page;
