"use client"

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from 'next/navigation';

const NavBar = (
  { toggle } : { toggle: () => void }) => {

  const currentRoute = usePathname(); 

  return (
    <>
      <div className="w-full h-20 bg-black bg-opacity-75 sticky top-0">
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 whitespace-nowrap">
              <li>
                <Link href="/about-me">
                <p className={`text-lg font-medium hover:text-gray-200 ${
                  currentRoute === "/about-me"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-400"
                  }`}>About Me</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/blog">
                <p className={`text-lg font-medium hover:text-gray-200 ${
                  currentRoute === "/blog"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-400"
                  }`}>Blog</p>
                </Link>
              </li>*/}
              <li> 
                <Link href="/projects">
                <p className={`text-lg font-medium hover:text-gray-200  ${
                  currentRoute === "/projects"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-400"
                  }`}>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                <p className={`text-lg font-medium hover:text-gray-200  ${
                  currentRoute === "/contact"
                  ? "border-b-2 border-indigo-500"
                  : "text-gray-400"
                  }`}>Contact</p>
                </Link>
              </li>
            </ul>
            <button type="button" className="inline-flex items-center md:hidden"
              onClick={toggle}>
              {/* Menu icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24">
                  <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;