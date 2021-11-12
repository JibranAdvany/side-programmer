import React, { useState } from "react";
import Link from "next/link";
import styles from "./Drawer.module.css";
import Image from "next/image";

const Drawer = (props) => {
  const closeDrawer = () => {
    props.closeDrawer();
  };

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-60"
      onClick={closeDrawer}
    >
      <nav
        className={`w-9/12 bg-white h-full px-4 top-0 z-30 pt-8 ${styles.moveIn}`}
      >
        <Link href="/">
          <a>
            <Image
              src="/logo-full.png"
              alt="Side Programmer Logo"
              width={150}
              height={50}
            />
          </a>
        </Link>
        {/* <h1 className="font-bold text-xl text-black">Side Programmer</h1> */}

        <div className="flex flex-col text-black">
          <Link href="/">
            <a className="ml-2 p-3 block py-2 border-b-2 border-gray-400 hover:bg-gray-300 transition-colors mt-4 duration-300">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="ml-2 p-3 block py-2 border-b-2 border-gray-400 hover:bg-gray-300 transition-colors mt-4 duration-300">
              About
            </a>
          </Link>
          <Link href="/posts">
            <a className="ml-2 p-3 block py-2 border-b-2 border-gray-400 hover:bg-gray-300 transition-colors mt-4 duration-300">
              Posts
            </a>
          </Link>
          <Link href="/topics">
            <a className="ml-2 p-3 block py-2 border-b-2 border-gray-400 hover:bg-gray-300 transition-colors mt-4 duration-300">
              Topics
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
