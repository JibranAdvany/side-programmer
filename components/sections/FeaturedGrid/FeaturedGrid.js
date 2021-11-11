import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const FeaturedGrid = () => {
  return (
    <section className="max-w-screen-lg grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-3 mt-10 md:mt-20 px-2">
      {/* Blog Post my favourite */}
      <div className="relative md:row-span-full col-span-full row-start-1 row-end-3 md:col-start-1 md:col-end-3 w-full  h-[300px] md:h-[500px]">
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
          <Link href="/learn">
            <a>
              <h3 className="bg-gray-800 bg-opacity-50 text-xl md:text-2xl text-white py-8 px-4 rounded-b-xl">
                What I learned while coding this blog!
              </h3>
            </a>
          </Link>
        </div>
      </div>
      {/* Resources */}
      <div className="col-span-full row-start-3 row-end-4 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3 bg-gradient-to-r from-gray-900 via-gray-600 to-purple-600 flex items-center justify-center rounded-xl">
        <Link href="/resources">
          <a className="block p-8">
            <h3 className="text-white font-semibold text-lg md:text-xl lg:text-3xl">
              Resources
            </h3>
          </a>
        </Link>
      </div>
      {/* Social Links */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-700 to-indigo-500 rounded-xl flex justify-center items-center">
        <a href="https://twitter.com/advani_jibran" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-[50px]"
          />
        </a>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 via-yellow-700 to-yellow-300 rounded-xl flex justify-center items-center">
        <a href="https://www.instagram.com/jibran_advani/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-[50px]"
          />
        </a>
      </div>
    </section>
  );
};

export default FeaturedGrid;
