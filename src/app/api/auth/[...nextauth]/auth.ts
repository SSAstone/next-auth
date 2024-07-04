import User from '@/models/userSchema';
import ConnectDB from '@/server/connectDB';
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/signin",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                // email: {
                //     label: "Email",
                //     type: "text",
                //     placeholder: "Email",
                // },
                // password: {
                //     label: "Password",
                //     type: "password",
                //     placeholder: "Password",
                // },
            },
            async authorize(credentials, req) {
                // console.log(credentials)
                const { email, password } = credentials as { email: string, password: string };
                await ConnectDB();
                try {
                    const user = await User.findOne({ email });
                    console.log("🚀 ~ file: auth.ts:27 ~ authorize ~ user:", user)
                    if (!user) {
                        return null;
                    }

                    if (user.password !== password) {
                        return null;
                    }
                    return user
                } catch (error) {
                    // return null
                    console.log(error)
                }
            }
        })
    ],
    // session: {
    //     strategy: "jwt"
    // },

    // secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     async jwt({ token, user}) {
    //         console.log("🚀 ~ file: auth.ts:49 ~ jwt ~ user:", user)
    //         console.log("🚀 ~ file: auth.ts:50 ~ jwt ~ token:", token)
    //         if (user) token.role = user.role
    //         return token
    //     },
    //     async session({ session, token }) {
    //         // console.log("🚀 ~ file: auth.ts:56 ~ session ~ session:", session)
    //         if (session?.user) {
    //             session.user = token as any
    //             session.user.role = token.role
    //         }
    //         return session
    //     }
    // }
    callbacks: {
        async jwt({ token, user }) {
            
            if (user) token.role = user.role
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            console.log("🚀 ~ file: auth.ts:74 ~ session ~ user:", user)
            console.log("🚀 ~ file: auth.ts:75 ~ session ~ token:", token)
            console.log("🚀 ~ file: auth.ts:76 ~ session ~ session:", session)
            session.user = token as any;
            session.user.role = token.role
            return session;
        },
    },
}
