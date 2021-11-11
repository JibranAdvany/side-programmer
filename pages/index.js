import { createClient } from "contentful";
import Layout from "../components/UI/Layout";
import Image from "next/image";
import FeaturedGrid from "../components/sections/FeaturedGrid/FeaturedGrid";
import FeaturedPosts from "../components/sections/FeaturedPosts/FeaturedPosts";
import TopicsWall from "../components/sections/TopicsWall/TopicsWall";
import LatestPosts from "../components/sections/LatestPosts/LatestPosts";

export default function Home(props) {
  return (
    <>
      <Layout>
        <main className="max-w-5xl mx-auto">
          <FeaturedGrid />
          <FeaturedPosts data={props.featuredPosts.items} />
          <TopicsWall />
          <LatestPosts data={props.latestPosts.items} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Connection
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });

  // Data
  const featuredPosts = await client.getEntries({
    content_type: "articles",
    "fields.featured": true,
  });

  const latestPosts = await client.getEntries({
    content_type: "articles",
    limit: 9,
  });

  return {
    props: {
      featuredPosts,
      latestPosts,
    },
  };
}
