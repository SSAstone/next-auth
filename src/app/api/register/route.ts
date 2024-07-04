import User from "@/models/userSchema";
import ConnectDB from "@/server/connectDB";
// import { NextApiRequest, NextApiResponse } from 'next';
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

export async function POST(req: Request) {
    try {
        await ConnectDB();
        const userData = await req.json();
        // console.log("🚀 ~ file: route.ts:11 ~ POST ~ userData:", userData)
        // console.log(body)
        const user = await User.findOne({ email: userData?.email })
        // const { username, email, password, role } = userData

        if (user) {
            return NextResponse.json({
                message: "User already exists",
            })
            
        } else {
            const newUser = new User(userData);
            const data = await newUser.save();
            return NextResponse.json(data);
        }

        // const user = new User(body);
        // const data = await user.save();
        // return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
        })
    }
}


// import { json } from 'next';
// import { ConnectDB } from 'path-to-your-ConnectDB-file';
// import User from 'path-to-your-user-model-file';


// await ConnectDB();
// const user = new User(req.body);
// const data = await user.save().then(() => {
//     return NextResponse.json({
//         message: "Todo was inserted successfully!",
//     })
// }).catch((error: any) => {
//     return NextResponse.json({
//         error: error.message,
//     })
// });