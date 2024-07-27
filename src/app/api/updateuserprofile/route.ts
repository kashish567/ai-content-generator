import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../utils/userSchema";


export const PUT=async (req:NextRequest)=>{
    const {username,email}=req.body;
    const authUser = await auth();
    
    const user = await User.findByIdAndUpdate(authUser?.user?._id,{username,email},{new:true});

    console.log(user);
    return NextResponse.json(user);

}