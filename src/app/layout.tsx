"use client";
import type { Metadata } from "next";
import "../../public/assets/scss/globals.scss";
import "../../public/assets/scss/style.scss";
import { Providers } from "@/redux-toolkit/provider";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { LTR, RTL } from "../../src/utils/constant/index";


import {metadata} from './metadata'
import { SessionProvider } from "next-auth/react";



export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  // const savedLang = localStorage.getItem("lang");
  // const savedTheme = localStorage.getItem("theme"); 
  return (
    
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        
      </head>
      <body >
        <SessionProvider>
        <Providers>{children}</Providers>
        <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
