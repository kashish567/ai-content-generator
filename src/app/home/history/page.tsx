"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios for HTTP requests
import Link from "next/link";

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/history");
        setHistoryData(response.data.data); // Adjusted to match your API response structure
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text: string, lines: number = 3) => {
    const splitText = text.split('\n').slice(0, lines).join('\n');
    return splitText.length < text.length ? `${splitText}...` : splitText;
  };

  return (
    <Link href={"/home/history"}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">History Page</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Form Data</th>
              <th className="border p-2 text-left">AI Response</th>
              <th className="border p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">
                  {Object.entries(item.formData).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </td>
                <td className="border p-2 max-w-sm whitespace-pre-wrap">
                  {truncateText(item.aiResponse)}
                </td>
                <td className="border p-2">{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default HistoryPage;
