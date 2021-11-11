import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./../../Drawer/Drawer";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <header className="bg-indigo-700 sticky top-0 z-10 px-6">
      <nav className="py-4 mx-auto flex justify-between items-center text-white max-w-7xl">
        <h1 className="font-bold text-3xl">Side Programmer</h1>

        <div
          className="md:hiddenp-4 cursor-pointer p-4"
          onClick={() => setShowDrawer(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-lg md:hidden" />
        </div>

        {showDrawer && <Drawer closeDrawer={closeDrawer} />}

        <div className="hidden md:flex justify-between items-center">
          <Link href="/">
            <a className="ml-3 md:ml-6 p-3">Home</a>
          </Link>
          <Link href="/about">
            <a className="ml-3 md:ml-6 p-3">About</a>
          </Link>
          <Link href="/posts">
            <a className="ml-3 md:ml-6 p-3">Posts</a>
          </Link>
          <Link href="/topics">
            <a className="ml-3 md:ml-5 p-3">Topics</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
