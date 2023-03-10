import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://bacforce.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="profile" href="http://gmpg.org/xfn/11" /> {/*todo*/}
        <link rel="pingback" href="https://bacforce.com/xmlrpc.php" />
        <meta name="msvalidate.01" content="C214C31FCA7F9C451D032045FAEAA622" />
        <meta name="copyright" content="Bacforce" />
        <meta name="distribution" content="Global" />
        <meta name="author" content="Bacforce" />
        <meta name="Owner" content="bacforce.com" />
        <meta property="fb:page_id" content="100087627767991" />
        <meta property="fb:admins" content="100087627767991" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="object" />
        <meta property="og:site_name" content="Bacforce" />
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:url" content={canonicalUrl} />
        <link
          rel="icon"
          type="image/x-icon"
          href="/landing/images/favicon-icon.png"
        ></link>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
