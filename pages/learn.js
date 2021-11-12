import React from "react";
import Layout from "./../components/UI/Layout";
import Head from "next/head";

const Learn = () => {
  return (
    <>
      <Head>
        <title>What I learned while coding this blog | Side Programmer</title>
      </Head>
      <Layout>
        <main className="max-w-5xl mx-auto min-h-screen mt-8 md:mt-16 px-4">
          <ul>
            <li>ReactJS</li>
            <li>NextJ</li>
            <li>Tailwind CSS</li>
            <li>Contetful CMS</li>
          </ul>
        </main>
      </Layout>
    </>
  );
};

export default Learn;
