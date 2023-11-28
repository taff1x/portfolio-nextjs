"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

const SideBar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {

  const currentRoute = usePathname(); 

  return (
    <>
      <div
        className="fixed w-full h-full overflow-hidden justify-center bg-black grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="text-center leading-relaxed text-xl">
          <li>
            <Link onClick={toggle} href="/">
              <p className={`text-lg font-medium ${
                currentRoute === "/"
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
              }`}>Home</p>
            </Link>
          </li>
          <li>
            <Link onClick={toggle} href="/about-me">
              <p className={`text-lg font-medium ${
                currentRoute === "/about-me"
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
              }`}>About Me</p>
            </Link>
          </li>
          <li>
            <Link onClick={toggle} href="/blog">
            <p className={`text-lg font-medium ${
                currentRoute === "/blog"
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
              }`}>Blog</p>
            </Link>
          </li>
          <li>
            <Link onClick={toggle} href="/projects">
            <p className={`text-lg font-medium ${
                currentRoute === "/projects"
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
              }`}>Projects</p>
            </Link>
          </li>
          <li>
            <Link onClick={toggle} href="/contact">
            <p className={`text-lg font-medium ${
                currentRoute === "/contact"
                ? "border-b-2 border-purple-500"
                : "text-gray-400"
              }`}>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;