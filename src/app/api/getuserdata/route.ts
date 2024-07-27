

import { auth } from "@/auth";
import { NextRequest,NextResponse } from "next/server";
import User from "../../../../utils/userSchema";


export const GET = async (req:NextRequest)  => {
    const authUser = await auth();
    const user= await User.findById(authUser?.user?._id);

    return NextResponse.json(user);
}