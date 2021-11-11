import { createClient } from "contentful";
import React from "react";
import FeaturedPosts from "../components/sections/FeaturedPosts/FeaturedPosts";
import Layout from "../components/UI/Layout";
import Card from "../components/sections/Card/Card";

const Posts = (props) => {
  return (
    <Layout>
      <main className="max-w-5xl mx-auto min-h-screen mt-16">
        <h2 className="text-5xl font-light border-b-2 border-gray-400 pb-4 px-2">
          Posts
        </h2>
        <section className="my-16">
          <div className="flex justify-around flex-wrap mx-auto mt-8">
            {props.posts.items.map((post) => (
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
      </main>
    </Layout>
  );
};

export default Posts;

export async function getStaticProps() {
  // Connection
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });

  // Data
  const posts = await client.getEntries({
    content_type: "articles",
  });

  return {
    props: {
      posts,
    },
  };
}
