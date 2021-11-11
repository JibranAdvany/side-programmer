import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import React from "react";
import Layout from "../../components/UI/Layout";
import Image from "next/image";
import styles from "./../../public/post.module.css";

const Post = (props) => {
  const published = new Date(
    props.post.items[0].sys.createdAt
  ).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updated = new Date(
    props.post.items[0].sys.updatedAt
  ).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${props.data.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={300}
    //       height={200}
    //     />
    //   );
    // },
    // p(paragraph) {
    //   const { node } = paragraph;

    //   if (node.children[0].tagName === 'img') {
    //     const image = node.children[0];

    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${props.data.slug}/${image.properties.src}`}
    //           alt={image.properties.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    //   return <p className={classes.blogDesc}>{paragraph.children}</p>;
    // },
    code(code) {
      const { className, children } = code;
      //const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          showLineNumbers={true}
          // wrapLongLines={true}
          style={atomDark}
          language={props.post.items[0].fields.topic.toLowerCase()}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <Layout>
      <main className="max-w-5xl mx-auto min-h-screen mt-16 px-4">
        <section className="my-16 max-w-screen-sm mx-auto">
          <h1 className="text-5xl font-light mb-8">
            {props.post.items[0].fields.title}
          </h1>
          <ReactMarkdown className="mb-4 leading-6">
            {props.post.items[0].fields.teaser}
          </ReactMarkdown>
          <Image
            src={`https:${props.post.items[0].fields.image.fields.file.url}`}
            alt="blog"
            width={700}
            height={350}
            objectFit="cover"
          />
          <div className="my-2">
            <small className="italic">by Jibran Advani</small>
            <div className="flex justify-between items-center mt-2">
              <small className="italic block">
                <span className="font-semibold">Published on:</span>
                <br />
                {published}
              </small>
              <small className="italic block">
                <span className="font-semibold">Last updated:</span>
                <br />
                {updated}
              </small>
            </div>
          </div>
          <div className={styles.content}>
            <ReactMarkdown components={customRenderers}>
              {props.post.items[0].fields.content}
            </ReactMarkdown>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Post;

export async function getStaticProps(context) {
  // Connection
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });

  // Data
  const post = await client.getEntries({
    content_type: "articles",
    "fields.slug": context.params.post,
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  // Connection
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });

  // Data
  const res = await client.getEntries({
    content_type: "articles",
  });

  const paths = res.items.map((item) => {
    return {
      params: { post: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
