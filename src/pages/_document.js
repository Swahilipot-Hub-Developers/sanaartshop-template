/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="SanaartShop" />
        <meta
          name="keywords"
          content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean"
        />
        <meta name="author" content="Createx Studio" />
        {/* Viewport*/}
        {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        <link
          rel="stylesheet"
          media="screen"
          href="vendor/simplebar/dist/simplebar.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="vendor/tiny-slider/dist/tiny-slider.css"
        />
        {/* Main Theme Styles + Bootstrap*/}
        <link rel="stylesheet" media="screen" href="css/theme.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script async src="vendor/simplebar/dist/simplebar.min.js"></script>
        <script async src="vendor/tiny-slider/dist/min/tiny-slider.js"></script>
        <script
          async
          src="vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"
        ></script>
        <script async src="js/theme.min.js"></script>
      </body>
    </Html>
  );
}
