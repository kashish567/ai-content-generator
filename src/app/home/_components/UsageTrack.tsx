import { Button } from "@/components/ui/button";
import React from "react";

const UsageTrack = () => {
  return (
    <div className="m-5 ">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: "35%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1">350/10,000 Credit used</h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-primary">Upgrade</Button>
    </div>
  );
};

export default UsageTrack;
