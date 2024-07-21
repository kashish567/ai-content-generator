"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

const UsageTrack = () => {
  const [usage, setUsage] = useState(0);
  const [totalCredits, setTotalCredits] = useState(20); // Set your total credits here
  const [usedCredits, setUsedCredits] = useState(0);

  useEffect(() => {
    const fetchUsageData = async () => {
      try {
        const response = await axios.get("/api/aicount"); // Adjust the endpoint as necessary
        const data = response.data;

        if (response) {
          const used = data.historyLength; // Assuming historyLength is used as credits
          setUsedCredits(used);
          setUsage((used / totalCredits) * 100);
        } else {
          console.error("Failed to fetch usage data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching usage data:", error);
      }
    };

    fetchUsageData();
  }, [totalCredits]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className={`h-2 rounded-full ${
              usage > 15 ? "bg-red-500" : "bg-white"
            }`}
            style={{
              width: `${usage}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1">
          {usedCredits}/{totalCredits} Credit used
        </h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-primary">
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
