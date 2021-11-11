import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";

// const data = [
//   {
//     id: 1,
//     title: "A brief introduction to HTML",
//     summary:
//       "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
//     image: "/grid-image-2.avif",
//     topic: "html",
//   },
//   {
//     id: 2,
//     title: "A brief introduction to HTML",
//     summary:
//       "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
//     image: "/grid-image-2.avif",
//     topic: "css",
//   },
//   {
//     id: 3,
//     title: "A brief introduction to HTML",
//     summary:
//       "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
//     image: "/grid-image-2.avif",
//     topic: "javascript",
//   },
//   {
//     id: 4,
//     title: "A brief introduction to HTML",
//     summary:
//       "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
//     image: "/grid-image-2.avif",
//     topic: "react",
//   },
//   {
//     id: 5,
//     title: "A brief introduction to HTML",
//     summary: "HTML stands for Hyper-Text Markup Language.",
//     image: "/grid-image-2.avif",
//     topic: "node",
//   },
// ];

const FeaturedPosts = (props) => {
  return (
    <section className="mt-20">
      <h2 className="font-light text-5xl">Top Picks for today!</h2>
      <div className="flex justify-around flex-wrap mx-auto mt-8">
        {/* Card */}
        {props.data.map((post) => (
          <div
            key={post.fields.slug}
            className="w-[300px] overflow-hidden mr-6 mt-12 rounded-lg flex flex-col justify-between bg-gray-100 shadow-md"
          >
            <Card
              title={post.fields.title}
              summary={post.fields.excerpt}
              image={post.fields.image}
              topic={post.fields.topic}
              link={post.fields.slug}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
