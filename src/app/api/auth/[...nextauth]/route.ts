import NextAuth, { NextAuthOptions } from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";
 
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    IdentityServer4Provider({
      id: "id-server",
      clientId: "nextApp",
      clientSecret: "secret",
      issuer: "https://identity.runasp.net",
      authorization: {
        params: {
          scope: "openid profile Neataq"
        }
      },
      idToken: true,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || profile.preferred_username || profile.email,
          email: profile.email || profile.preferred_username, 
          image: profile.picture,
          username: profile.preferred_username || profile.name || profile.email,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, profile, account }) {
      console.log("Profile in JWT Callback:", profile);
      console.log("Account in JWT Callback:", account);

      if (profile) {
        // token.username = profile.username || profile.preferred_username || profile.name;
        token.email = profile.email;
      }

      if (account) {
        token.access_token = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.access_token = token.access_token; 
      // session.user.image = token.image || null;

      return session;
    }
  }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };