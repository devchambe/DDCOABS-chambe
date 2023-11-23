import { connectMONGODB } from "@/app/lib/mongodb";
import Users from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const body = await req.json();
        const { password, ...otherData} = body.formData

        const hashedPass = await bcrypt.hash(password, 10);

        const usersReg = { ...otherData, password: hashedPass };

        await connectMONGODB();
        await Users.create(usersReg);

        return NextResponse.json({ message: "User registered!" }, { status: 201 });
    } catch (error) {
        console.error("ERROR REGISTRY!", error);
        return NextResponse.json({ message: "ERROR REGISTRY!", error }, { status: 500 });
    }
}
