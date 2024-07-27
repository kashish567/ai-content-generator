"use client";
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

const [totalUsage, setTotalUsage]= useState<Number>(0);

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
    <div className="bg-slate-100 h-full">
      <div className="md:w-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
    </TotalUsageContext.Provider>
  );
};

export default layout;
