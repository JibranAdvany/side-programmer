import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <>
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={`https:${props.image.fields.file.url}`}
          alt={props.title}
          layout="fill"
          sizes="300px"
          objectFit="cover"
        />
        {/* <Link href={`/topics/${props.topic.toLowerCase()}`}> */}
        <Link href={`/topics/${props.topic.toLowerCase()}`}>
          <a>
            <div className="absolute bottom-0 mb-2 ml-2 py-1 px-4 rounded-full bg-indigo-700 text-white font-bold">
              <small className="block">{props.topic}</small>
            </div>
          </a>
        </Link>
      </div>
      <Link href={`/posts/${props.link}`}>
        <a>
          <div className="px-2">
            <h3 className="font-semibold text-xl mb-3 mt-2">{props.title}</h3>
            <p className="font-medium text-sm">{props.summary}</p>
          </div>
        </a>
      </Link>

      {/* Author */}
      <div className="mt-8 px-2 pb-2 flex items-center">
        <Image
          src="/profileImage.jpg"
          alt="Jibran Advani"
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
        <small className="italic ml-2">Jibran Advani</small>
      </div>
    </>
  );
};

export default Card;
