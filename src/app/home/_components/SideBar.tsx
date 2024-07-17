"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, FileLock, WalletCards, Settings } from "lucide-react";
import UsageTrack from "./UsageTrack";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const MenuList = [
    { name: "Home", icon: Home, path: "/home" },
    { name: "History", icon: FileLock, path: "/home/history" },
    { name: "Billing", icon: WalletCards, path: "/home/billing" },
    { name: "Setting", icon: Settings, path: "/home/setting" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-screen relative p-6 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="" width={120} height={120} />
      </div>
      <hr className="my-8 border" />
      <div className=" mt-5">
        {MenuList.map((menu, index) => (
          <div
            className={`flex items-center font-serif gap-2 mb-2 p-3
           hover:bg-primary hover:text-white rounded-lg cursor-pointer
           ${router.pathname === menu.path ? "bg-primary text-white" : ""}`}
            key={index}
            onClick={() => handleNavigation(menu.path)}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideBar;
