"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Setting = () => {
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    image: string;
  }>({ email: "", name: "", image: "" });

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get("/api/getuserdata");
        if (response) {
          setFormData({
            email: response.data.email || "",
            name: response.data.username || "",
            image: response.data.profilePhoto || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  const handleLogout = async () => {
    // Add logout logic here if needed
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[645px] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
        <div className="flex justify-center mb-6">
          <Image
            src={formData.image}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">{formData.name}</h2>
          <p className="text-gray-600">{formData.email}</p>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Setting;
