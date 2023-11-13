import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
  
      GoogleProvider({
        clientId: "624016242518-0ks2i40o7abmhtqv6264h0fea20lltls.apps.googleusercontent.com",
        clientSecret: "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",
      }),
    ],
    session: {
    strategy: 'jwt',
   },
   secret: "say_lalisa_love_me_lalisa_love_me_hey",
   callbacks: {
      
      
      async jwt({token, account}) {
        if (account) {
          token = Object.assign({}, token, { access_token: account.access_token });
          console.log(token)
        }
        return token
      },
      async session({session, token}) {
          console.log(token)
      if(session) {
        session = Object.assign({}, session, {access_token: token.access_token})
        
        console.log(session);
        }
      return session
      },
      async signIn({ user, account, profile}) {
          const response = await axios.post(
              "http://localhost:38000/login",
              { email: profile?.email, token: account?.access_token }
            );
            if (response && response.data?.loggedIn === true) {        
              return true;
          } else {
            const data = {
              firstName: profile?.name,
              lastName: profile?.name,
              email: profile?.email,
              profileUrl: profile?.image,
            };
            const response = await axios.post(
              "http://localhost:38000/signUp",
              data
            );
            return true;
          }
          }
    }
  };