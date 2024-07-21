import dbConnection from "../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../utils/userSchema";
import { auth } from "@/auth";

dbConnection();

export const GET = async (req: NextRequest) => {
  try {
    const authUser = await auth();
    const userId = authUser?.user?._id;

    if (!userId) {
      return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
    }

    const data = await User.findById(userId).populate("history");

    if (!data) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const historyLength = data.history.length;

    return NextResponse.json({ data: data, historyLength: historyLength }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
