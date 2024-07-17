import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { getUserByEmail  } from "./data/user"
import dbConnection from "../utils/db";
import User from "../utils/userSchema";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                try {
                    if(credentials == null) return null;
                    const user = getUserByEmail(credentials?.email);
                    if(user){
                        const isValid = user?.password === credentials?.password;
                        if(isValid){
                            return user;
                        }else{
                            throw new Error("Invalid credentials");
                        }
                    }else{
                        throw new Error("No user found");
                    }
                } catch (error) {
                    throw new Error("Invalid credentials");
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
     callbacks: {
        async session({session}:{session:any}) {
            try {
                await dbConnection();
                if(session.user){
                    const user = await User.findOne({email:session.user.email});
                    if(user){
                        session.user._id = user._id;
                        return session;
                    }
                    else{ 
                        console.log("User not found")
                    }
                }else{
                    console.log("Invalid Session :")
                }
                
            } catch (error) {
                console.log(error);
                throw error;   
            }
            
        },
        async signIn({ account, profile }) {
            if (account?.provider === 'github') {
                await dbConnection;
                try {
                    const user = await User.findOne({email:profile?.email!});
                    if (!user) {
                        const newUser = await User.create({
                            username: profile?.login,
                            fullname: profile?.name,
                            email: profile?.email,
                            profilePhoto: profile?.avatar_url
                        });
                        await newUser.save();
                    }
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return false;
        }
    }
});