import React from "react";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 z-20">
      <nav className="w-9/12 bg-white h-full px-4 top-0 z-30">
        <h1 className="font-bold text-xl">Side Programmer</h1>

        <div className="flex flex-col">
          <Link href="/">
            <a className="ml-6 p-3">Home</a>
          </Link>
          <Link href="/about">
            <a className="ml-6 p-3">About</a>
          </Link>
          <Link href="/posts">
            <a className="ml-6 p-3">Posts</a>
          </Link>
          <Link href="/topics">
            <a className="ml-5 p-3">Topics</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
