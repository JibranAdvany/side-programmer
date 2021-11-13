import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto text-gray-400">
        <p className="text-sm text-center">
          Copyright &copy; {year}. All rights reserved.
        </p>

        <p className="text-sm text-center pt-4">
          All brand logos used in the site are for demonstration purpose only
          and they do not imply any indorsement, whatsoever.
        </p>

        <p className="text-sm text-center pt-4">
          Developed and maintained by{" "}
          <a
            href="https://jibranadvani.com"
            target="_blank"
            className="text-indigo-500"
          >
            Jibran Advani
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
