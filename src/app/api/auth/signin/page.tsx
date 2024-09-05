import Login from "@/components/login/login";
import React from "react";

export default function Page({
  searchParams
}: {
  searchParams: { callbackUrl: string };
}) {
  return (
    <>
    <Login
      showLogin
      callbackUrl={searchParams.callbackUrl}
    />
    </>
  );
}
