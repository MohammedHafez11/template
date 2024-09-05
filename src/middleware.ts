export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/session", "/test"],
  pages: {
    signIn: "/api/auth/signin"
  }
};
