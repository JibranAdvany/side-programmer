import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta
            name="description"
            content="Side programmer is a blog that aims to provide high quality content around various technologies including web development."
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, NextJS, NodeJS, ExpressJS, Blog"
          />

          <meta name="author" content="Jibran Advani" />

          <meta property="og:title" content="Side Programmer" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.jibranadvani.com/main.jpg"
          />
          <meta
            property="og:description"
            content="Side programmer is a blog that aims to provide high quality content around various technologies including web development."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Side Programmer" />
          <meta
            name="twitter:description"
            content="Side programmer is a blog that aims to provide high quality content around various technologies including web development."
          />
          <meta name="twitter:site" content="@advani_jibran" />
          <meta
            name="twitter:image"
            content="http://www.jibranadvani.com/main.jpg"
          />
          <meta name="twitter:creator" content="@advani_jibran" />
          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>
        <body className="relative">
          <div id="portal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
