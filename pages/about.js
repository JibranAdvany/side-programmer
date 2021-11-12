import React from "react";
import Layout from "../components/UI/Layout";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Side Programmer | About</title>
      </Head>
      <Layout>
        <main className="max-w-5xl mx-auto min-h-screen mt-8 md:mt-16 px-4">
          <h2 className="text-3xl md:text-5xl font-light border-b-2 border-gray-400 md:pb-4 px-2">
            About
          </h2>
          <section className="my-8 md:my-16 max-w-screen-sm mx-auto">
            <div className="flex items-center mb-4">
              <Image
                src="/profileImage.jpg"
                alt="Jibran Advani"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <h3 className="text-3xl ml-2">Jibran Advani</h3>
            </div>
            <p className="mb-4 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              enim ut tellus elementum sagittis vitae et leo duis. Augue mauris
              augue neque gravida in fermentum et sollicitudin ac. Amet
              consectetur adipiscing elit duis tristique sollicitudin nibh. Nibh
              sit amet commodo nulla. Amet luctus venenatis lectus magna
              fringilla urna. Gravida rutrum quisque non tellus orci ac auctor.
              Semper feugiat nibh sed pulvinar. Lacus luctus accumsan tortor
              posuere. In cursus turpis massa tincidunt dui ut ornare lectus.
              Elit pellentesque habitant morbi tristique.
            </p>
            <p className="mb-4 leading-6">
              Laoreet non curabitur gravida arcu ac tortor dignissim. Donec ac
              odio tempor orci dapibus ultrices in iaculis. Dolor magna eget est
              lorem ipsum dolor sit amet. Est lorem ipsum dolor sit. Est
              placerat in egestas erat imperdiet sed euismod. Eget aliquet nibh
              praesent tristique magna sit. Etiam non quam lacus suspendisse
              faucibus interdum posuere. Aliquet risus feugiat in ante metus
              dictum. Aenean pharetra magna ac placerat vestibulum. Ac ut
              consequat semper viverra nam libero. Donec enim diam vulputate ut
              pharetra. Ultrices gravida dictum fusce ut placerat orci nulla
              pellentesque dignissim. Vel pharetra vel turpis nunc eget lorem
              dolor. Feugiat nisl pretium fusce id velit ut tortor pretium
              viverra. Velit scelerisque in dictum non consectetur. Tortor
              aliquam nulla facilisi cras. Aenean euismod elementum nisi quis
              eleifend quam. Accumsan sit amet nulla facilisi morbi tempus.
              Pellentesque adipiscing commodo elit at.
            </p>

            <p className="mb-4 leading-6">
              In iaculis nunc sed augue lacus. Ac turpis egestas sed tempus
              urna. Ultrices in iaculis nunc sed augue lacus viverra vitae
              congue. Vitae proin sagittis nisl rhoncus mattis rhoncus urna.
              Morbi tristique senectus et netus et malesuada fames ac turpis.
              Cras adipiscing enim eu turpis egestas pretium aenean pharetra.
              Orci sagittis eu volutpat odio facilisis. Vestibulum morbi blandit
              cursus risus at ultrices mi. A pellentesque sit amet porttitor.
              Aliquet nibh praesent tristique magna sit amet purus gravida.
              Nulla facilisi etiam dignissim diam quis enim.
            </p>

            <p className="mb-4 leading-6">
              Urna duis convallis convallis tellus id interdum velit laoreet id.
              Nisl pretium fusce id velit ut tortor pretium. Posuere morbi leo
              urna molestie. Viverra orci sagittis eu volutpat odio facilisis
              mauris sit amet. Egestas pretium aenean pharetra magna ac placerat
              vestibulum lectus. Vulputate eu scelerisque felis imperdiet proin
              fermentum leo vel orci. Varius morbi enim nunc faucibus a
              pellentesque. Vulputate eu scelerisque felis imperdiet proin
              fermentum leo vel. Mattis pellentesque id nibh tortor id aliquet
              lectus. Quam lacus suspendisse faucibus interdum posuere lorem
              ipsum dolor sit. Nullam vehicula ipsum a arcu cursus vitae. Urna
              nec tincidunt praesent semper feugiat nibh sed. In tellus integer
              feugiat scelerisque varius morbi enim nunc faucibus. Pretium nibh
              ipsum consequat nisl vel pretium. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in aliquam. Mollis aliquam ut porttitor
              leo a. Egestas sed sed risus pretium quam vulputate dignissim.
            </p>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default About;
