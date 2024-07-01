import React from "react";
import Image from "next/image";
import { Template } from "./TemplateListSection";
import Link from "next/link";

interface TemplateCardProps {
  item: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ item }) => {
  return (
    <Link href={"home/content/" + item?.slug}>
      <div
        className="p-5 shadow-md rounded-md border m-3 bg-white 
    flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all"
      >
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-semibold text-sm flex">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
        {/* You can add more fields as needed */}
      </div>
    </Link>
  );
};

export default TemplateCard;
