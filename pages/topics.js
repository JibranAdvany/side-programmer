import React from "react";
import Layout from "../components/UI/Layout";
import Link from "next/link";
import Head from "next/head";

const topics = [
  "HTML",
  "CSS",
  "Javascript",
  // "Front-end",
  // "Back-end",
  // "Python",
  // "Django",
  // "Flask",
  // "React",
  // "Next",
  // "Freelancing",
];

const Topics = () => {
  return (
    <>
      <Head>
        <title>Side Programmer | Topics</title>
      </Head>
      <Layout>
        <main className="max-w-5xl mx-auto min-h-screen mt-8 md:mt-16 px-4">
          <h2 className="text-3xl md:text-5xl font-light border-b-2 border-gray-400 pb-4 px-2">
            Topics
          </h2>
          <section className="my-16 max-w-screen-sm mx-auto">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="bg-gray-300 py-4 px-4 mb-6 shadow-md hover:translate-y-2 transition-all duration-500"
              >
                <Link href={`/topics/${topic.toLocaleLowerCase()}`}>
                  {/* <Link href={`/posts`}> */}
                  <a className="block">{topic}</a>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Topics;
