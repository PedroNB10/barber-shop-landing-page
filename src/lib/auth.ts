

import GoogleProvider from "next-auth/providers/google";
import { redirect, useRouter } from "next/navigation";
import { NextAuthOptions, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
export const authConfig: NextAuthOptions = {
    providers: [
    
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            scope: "openid profile email https://www.googleapis.com/auth/calendar",
         
          }
        }
        
      }),

  
    ],

    callbacks: {
      async jwt({  token, account }) {


          if (account) {
            token.id_token = account.id_token
            token.provider = account.provider
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token  }) {
          session.accessToken = token.accessToken as string
          return session
        },
  },
  };

  export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/signin");
  }
  
  export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
      const session = useSession();
      const router = useRouter();
      if (!session) router.push("/signin");
    }
  }