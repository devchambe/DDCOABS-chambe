import { connectMONGODB } from "@/app/lib/mongodb";
import Users from "@/app/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
        }),
    ],

    async authorize(credentials){
        const { email, password } = credentials;

        try {
            await connectMONGODB();
            const user = await Users.findOne({ email });
            console.log("Email: ", user);

            if (!user) {
                return null;
            }

            const isPassValid = await bcrypt.compare(password, user.password);
            console.log("Pass: ", isPassValid);

            if (!isPassValid) {
                return null;
            }

            return user;
        } catch (error) {
            console.log("Error: ", error);
            return null;
        }
    },

    pages: {
        signIn: '/dashboard'
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;