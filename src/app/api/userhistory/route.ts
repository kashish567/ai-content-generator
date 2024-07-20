import dbConnection from "../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../utils/userSchema";

dbConnection();
export const GET = async (req: NextRequest) => {
  try {
    const data = await User.find();
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};