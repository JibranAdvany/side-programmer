import React from "react";
import Card from "./../Card/Card";

const data = [
  {
    id: 1,
    title: "A brief introduction to HTML",
    summary:
      "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
    image: "/grid-image-2.avif",
    topic: "html",
  },
  {
    id: 2,
    title: "A brief introduction to HTML",
    summary:
      "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
    image: "/grid-image-2.avif",
    topic: "css",
  },
  {
    id: 3,
    title: "A brief introduction to HTML",
    summary:
      "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
    image: "/grid-image-2.avif",
    topic: "javascript",
  },
  {
    id: 4,
    title: "A brief introduction to HTML",
    summary:
      "HTML stands for Hyper-Text Markup Language. It is the language that is used to structure the content on a webpage.",
    image: "/grid-image-2.avif",
    topic: "react",
  },
  {
    id: 5,
    title: "A brief introduction to HTML",
    summary: "HTML stands for Hyper-Text Markup Language.",
    image: "/grid-image-2.avif",
    topic: "node",
  },
];

const LatestPosts = (props) => {
  return (
    <section className="mt-10 md:mt-20 mb-20 px-2">
      <h2 className="font-light text-3xl md:text-5xl">Latest posts</h2>
      <div className="flex justify-around flex-wrap mx-auto mt-4 md:mt-8">
        {/* Card */}

        {props.data.map((post) => (
          <div
            key={post.fields.slug}
            className="w-[300px] overflow-hidden mr-3 md:mr-6 mt-6 md:mt-12 rounded-lg flex flex-col justify-between bg-gray-100 shadow-md"
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

export default LatestPosts;
