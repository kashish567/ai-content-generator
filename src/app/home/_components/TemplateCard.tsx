import React from "react";
import { Template } from "./TemplateListSection";
import Image from "next/image";

function TemplateCard(item: Template) {
  return (
    <div>
      <Image src={item.icon} alt="icon" width={50} height={50} />
      <h2>{item.name}</h2>
    </div>
  );
}

export default TemplateCard;
