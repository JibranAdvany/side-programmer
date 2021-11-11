import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FeaturedGrid = () => {
  return (
    <section className="max-w-screen-lg grid grid-cols-4 grid-rows-3 gap-3 mt-20">
      {/* Blog Post my favourite */}
      <div className="relative row-span-full col-start-1 col-end-3 w-full h-[500px]">
        <Image
          src="/grid-image-1.avif"
          alt="Post Image"
          layout="fill"
          objectFit="cover"
          sizes="500px"
          className="rounded-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div></div>
          <h3 className="bg-gray-300 bg-opacity-20 text-2xl py-8 px-4">
            What I learned while coding this blog!
          </h3>
        </div>
      </div>
      {/* Resources */}
      <div className="col-start-3 col-end-5 row-start-1 row-end-3 bg-gradient-to-r from-gray-900 via-gray-600 to-purple-600 flex items-center justify-center rounded-xl">
        <h3 className="text-white font-semibold text-3xl">Resources</h3>
      </div>
      {/* Social Links */}
      <div className="bg-indigo-400 rounded-xl flex justify-center items-center">
        <FontAwesomeIcon icon={faTwitter} className="text-white text-[50px]" />
      </div>
      <div className="bg-blue-400 rounded-xl flex justify-center items-center">
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white text-[50px]"
        />
      </div>
    </section>
  );
};

export default FeaturedGrid;