"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "reactstrap";
type Props = {
  showLogin?: boolean;
  callbackUrl?: string;
};

export default function Login({
  showLogin,
  callbackUrl
}: Props) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {showLogin && (
        <Button
        style={{"background": "var(--theme-gradient-button)", border: "none", borderRadius: "5px", padding: "10px 20px"}}
          onClick={() => signIn("id-server", { callbackUrl: "/" })}
        >
          Please login from here
        </Button>
      )}
    </div>
  );
}