"use client";

import OperatingHours from "@/app/(components)/(global)/OperatingHours";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      // router.refresh();
      // router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:flex px-10 md:px-20">
      <div className="bg-white bg-opacity-90 xl:w-1/3 lg:w-1/2 shadow-md rounded-b-3xl h-full">
        {/* blue container */}
        <div className="bg-gradient-to-b from-teal-600 to-blue-700 flex justify-center items-center py-8 rounded-b-[70%]">
          <Image
            src="/logo.png"
            alt="DentFix Logo"
            width={200}
            height={200}
            className="mix-blend-screen"
          />
        </div>
        {/* login form */}
        <div className="py-5 px-8">
          <form className="" onSubmit={handleSubmit} method = "POST">
            <div className="mb-4">
              <label
                for=""
                className="flex gap-2 items-center font-semibold text-gray-400 text-sm">
                Email Address
              </label>
              <input
                type="email"
                name = "email"
                className="focus:outline-blue-700 mb-3 mt-2 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label
                for=""
                className="flex gap-2 items-center font-semibold text-gray-400 text-sm">
                Password
              </label>
              <input
                type="password"
                name = "password"
                className="focus:outline-blue-700  mb-3 mt-1 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-gray-400 text-[0.8em] underline hover:text-blue-700"
              >
                Reset Password?
              </Link>

              {error && (
                <p className="flex gap-2 items-center font-semibold text-red-400 text-sm">
                  {error}
                </p>
              )}
              <input
                type="submit"
                value="Login"
                className="text-white text-center px-8 py-2 rounded-md bg-blue-700 hover:bg-blue-800"
              />
              {/* <button type="submit" className='text-white px-8 py-2 rounded-md bg-blue-700 hover:bg-blue-800'>Login</button> */}
            </div>
          </form>
          <hr className="my-4" />
          <Link href="/register" className="text-gray-400 text-[0.8em]">
            {" "}
            Don't have an account yet?
            <span className="text-blue-700 hover:underline ml-1">
              Register Here!
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 xl:p-20 lg:p-15 p-10 text-white border-opacity-20">
        <OperatingHours/>
      </div>
    </div>
  );
};

export default LoginUser;
