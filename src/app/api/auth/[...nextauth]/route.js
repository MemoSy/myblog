import User from "@/Models/User";
import connect from "@/Utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect()

        try {
          const user = await User.findOne({ email: credentials.email })
          
          if (user) {
            const isPasswordCorrect = await user.password == credentials.password

            if (isPasswordCorrect) {
              return user
            }else{
              throw new Error("Password is incorrect")
            }

          }else{
            throw new Error("user noT FOUND")
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
});

export { handler as GET, handler as POST };