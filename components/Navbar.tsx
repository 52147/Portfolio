"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white ">
      <div
        className="flex justify-between items-center py-4 px-6 md:px-16 w-full text-xs bg-[url('/Rectangle%2063.png')]"
        style={{ backgroundPosition: "center" }}
      >
        <div className="mt-4 text-lg font-bold ml-48"></div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div
          className={`mr-52 mt-4 md:flex gap-5 justify-end items-center md:relative w-full md:w-auto ${
            isOpen ? "pt-4 pb-4 flex" : "hidden"
          } md:flex-row flex-col absolute md:static bg-black md:bg-transparent top-16 left-0 md:top-0`}
        >
          <Link href="#about">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              About
            </span>
          </Link>
          <Link href="#work-experience">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              Work Experience
            </span>
          </Link>
          <Link href="#volunteer">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              Volunteer
            </span>
          </Link>
          <Link href="#ui-ux-design">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              UI/UX Design
            </span>
          </Link>
          <Link href="#skill-set">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              Skill Set
            </span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-gray-300 cursor-pointer py-2 md:py-0 px-5 md:px-0">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
