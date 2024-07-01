"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Template } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "../../../../../utils/AiModel";
import dbConnection from "../../../../../utils/db";
import AiOutput from "../../../../../utils/schema";
import { storeSchema } from "../../../../../utils/responseStore";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent({ params }: PROPS) {
  const selectedTemplate: Template | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  // const {user} = useU adding the emial of user

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    // console.log(result.response.text());
    setAiOutput(result?.response.text());
    // console.log(formData);
    await storeSchema(formData, result?.response.text());
    // await SaveinDb(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  // const SaveinDb = async (formData: any, slug: any, aiResp: string) => {
  //   const result = await db.insert(AiOutput).values({
  //     formData: formData,
  //     templateSlug: slug,
  //     aiResponse: aiResp,
  //     // createdBy:
  //     // createdAt: new Date()
  //   });

  //   console.log(result);
  // };

  return (
    <div className="p-10">
      <Link href={"/home"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
        {/* form section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAiContent(v)}
          loading={loading}
        />
        {/* output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
