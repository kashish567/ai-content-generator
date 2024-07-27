"use client";
import React, { useState, useEffect, useCallback, useContext } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Template } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "../../../../../utils/AiModel";
import { storeSchema } from "../../../../../utils/responseStore";
import { auth } from "@/auth";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = ({ params }: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { usage, setUsage } = useContext(TotalUsageContext);
  const router = useRouter();

  const selectedTemplate: Template | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  const GenerateAiContent = useCallback(
    async (formData: any) => {
      if (usage >= 20) {
        console.log("please upgrade");
        router.push("home/billing");
        return;
      }
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;

      const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      try {
        const result = await chatSession.sendMessage(FinalAiPrompt);

        const responseText = await result?.response.text();
        setAiOutput(responseText);

        await storeSchema(formData, responseText, params["template-slug"]);
      } catch (error) {
        console.error("Error generating AI content:", error);
      } finally {
        setLoading(false);
      }
    },
    [params["template-slug"], selectedTemplate]
  );

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
};

export default CreateNewContent;
