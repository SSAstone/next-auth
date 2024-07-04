import User from "@/models/userSchema";
import ConnectDB from "@/server/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDB();
        const data = await User.find();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
        })
    }
}