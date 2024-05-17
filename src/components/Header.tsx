"use client";
import Link from "next/link";
import { useState } from "react";
import { heebo } from "@/utils/fonts";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Works", "Blog", "Contact"];
  console.log(isOpen);
  return (
    <header className="fixed w-full h-50  p-4 md:p-6 bg-white md:bg-transparent md:backdrop-blur">
      <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-8 h-18 absolute right-6 bottom-2 text-black ${
            isOpen && "z-10"
          }`}>
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
        {isOpen && (
          <div className="fixed bg-white right-0 top-0 w-full h-[300px]">
            <ul className="w-full h-[80%] mt-11 p-4 flex flex-col items-start space-y-10">
              {navLinks.map((item, i) => (
                <li key={item} className="ml-5">
                  <Link href={item == "Home" ? "/" : item}> {item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
      <div className="hidden md:flex md:items-center  md:max-w-6xl md:mx-auto  md:text-black">
        <div className="w-3/4"></div>
        <div className={`${heebo.className} w-1/4`}>
          <ul className="flex justify-between w-full font-medium text-xl">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link == "Home" ? "/" : link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
