import { createClient } from "contentful";
import React from "react";
import Layout from "./../../../components/UI/Layout";
import Card from "./../../../components/sections/Card/Card";
import Head from "next/head";

const Html = (props) => {
  return (
    <>
      <Head>
        <title>Side Programmer | Javascript</title>
      </Head>
      <Layout>
        <main className="max-w-5xl mx-auto min-h-screen mt-8 md:mt-16 px-4">
          <h2 className="text-3xl md:text-5xl font-light border-b-2 border-gray-400 pb-4 px-2">
            HTML posts
          </h2>
          <section className="my-16">
            <div className="flex justify-around flex-wrap mx-auto mt-8">
              {props.posts.items.map((post) => (
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
        </main>
      </Layout>
    </>
  );
};

export default Html;

export async function getStaticProps() {
  // Connection
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });

  // Data
  const posts = await client.getEntries({
    content_type: "articles",
    "fields.topic": "JavaScript",
  });

  return {
    props: {
      posts,
    },
  };
}
