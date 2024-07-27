"use client";
import React, { useState } from "react";
import { LoginImg, Logo } from "../../assets/index";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Image from "next/image";
export default function LogingContainer() {
  const [showpassword, setShowpassword] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-primary1 relative">
        <Image alt="Loging Image" src={LoginImg} className="" />
        <div className="top-44 bg-white w-lvw absolute h-screen flex flex-col items-center rounded-3xl">
          <div className="justify-center ">
            <Image alt="Loging Image" src={Logo} className=" mt-5 w-72" />
            <h1 className="text-left text-opacity-80 text-2xl mt-7 font-bold text-gray-800">
              Login
            </h1>{" "}
            <form className="flex flex-col mt-4">
              <label className="text-gray-500 mb-2 font-semibold text-sm">
                Username
              </label>
              <input
                type="text"
                name="name"
                className="border border-gray-300 p-1 rounded mb-3"
                placeholder="Enter your username"
              />

              <label className="text-gray-500  mb-2 mt-4 font-semibold text-sm">
                Password
              </label>
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                className="border border-gray-300 p-1 rounded mb-3"
                placeholder="Enter your password"
              />
              <div
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowpassword((s) => !s)}
              ></div>
              {showpassword ? <FaRegEyeSlash /> : <FaRegEye />}

              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white p-1 rounded cursor-pointer hover:bg-blue-600 mt-2"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
