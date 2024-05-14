import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";
import { signIn } from "next-auth/react";

const handler = NextAuth({
    session:{
        strategy: "jwt"
    },
    pages:{
      signIn: "/login"
    },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const response = await sql`
        SELECT * FROM users WHERE username=${credentials?.username}`
        const user = response.rows[0]
        const passwordCorrect= await compare(credentials?.password || "", user.password)

        console.log({passwordCorrect})
        
        if(passwordCorrect){
            return{
                id: user.id,
                username: user.username
            }
        }
        console.log({ credentials });
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
