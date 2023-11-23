import React from "react";
import Footer from "@/app/(components)/(global)/Footer";
import { Inter } from "next/font/google";
import Navbar from "@/app/(components)/(global)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Log In | DDC-OABS",
  description: "Login Page",
};

const LoginLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col justify-between bg-gradient-to-r from-teal-700 to-blue-800 bg-cover min-h-screen max-w-full">
          {children}
          <div className="text-white">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default LoginLayout;
