import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto text-gray-400">
        <p className="text-sm text-center">
          Copyright &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
