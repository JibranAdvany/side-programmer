import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faAngular,
  faNode,
  faPython,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const TopicsWall = () => {
  return (
    <section className="mt-20">
      <h2 className="font-light text-5xl">Topics</h2>
      <div className="grid grid-cols-11 grid-rows-3 gap-4 text-center rounded-lg mt-8">
        <div className="row-span-full col-start-1 col-end-5 bg-blue-400 rounded-lg flex justify-center items-center shadow-md">
          <h3 className="text-white text-3xl">Front-end</h3>
        </div>
        {/* Middle */}
        <div className="bg-[rgb(227,76,38)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faHtml5} className="text-2xl" />
          <h3 className="text-sm">HTML</h3>
        </div>
        <div className="bg-[rgb(38,77,228)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faCss3} className="text-2xl" />
          <h3 className="text-sm">CSS</h3>
        </div>
        <div className="bg-[rgb(204,102,153)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faSass} className="text-2xl" />
          <h3 className="text-sm">Sass</h3>
        </div>
        <div className="bg-[rgb(240,219,79)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faJs} className="text-2xl" />
          <h3 className="text-sm">Javascript</h3>
        </div>
        <div className="bg-[rgb(136,221,237)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faReact} className="text-2xl" />
          <h3 className="text-sm">React</h3>
        </div>
        <div className="bg-[rgb(221,27,22)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faAngular} className="text-2xl" />
          <h3 className="text-sm">Angular</h3>
        </div>
        <div className="bg-[rgb(60,135,58)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faNode} className="text-2xl" />
          <h3 className="text-sm">Node</h3>
        </div>
        <div className="bg-[rgb(48,105,152)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faPython} className="text-2xl" />
          <h3 className="text-sm">Python</h3>
        </div>
        <div className="bg-[rgb(50,222,132)] p-3 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faAndroid} className="text-2xl" />
          <h3 className="text-sm">Android</h3>
        </div>
        <div className="row-span-full col-start-8 col-end-12 bg-red-400 rounded-lg flex justify-center items-center shadow-md">
          <h3 className="text-white text-3xl">Back-end</h3>
        </div>
      </div>
    </section>
  );
};

export default TopicsWall;
