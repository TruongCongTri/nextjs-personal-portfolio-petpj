"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {
  main: string;
  submain: string;
  path: string;
  path2: string;
};
const NavList = ({ main, submain, path, path2 }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Link
      href={``}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="py-3 flex items-center space-x-3 cursor-pointer"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        className={` mr-3 transition ease-in duration-100  ${
          focus ? "text-blue-600" : "text-neutral-500"
        }`}
      >
        <path d={path}></path>
        <path d={path2}></path>
      </svg>

      <div
        className={`transition ease-in duration-100 text-[14px] ${
          focus ? "text-blue-500 " : "text-neutral-500"
        }`}
      >
        <div
          className={`font-semibold transition ease-in duration-100 ${
            focus ? "text-blue-500" : "text-neutral-800"
          } text-base leading-5`}
        >
          {main}
        </div>
        {submain}
      </div>
    </Link>
  );
};

export default NavList;
