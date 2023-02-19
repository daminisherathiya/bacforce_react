import Head from "next/head";
import Footer from "@/components/Footer";
import WeHelp from "@/components/WeHelp";
import ThankYou from "@/components/Banner/ThankYou";
import Header from "@/components/Header/Header";

// todo: add context variables
const index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Hire Salesforce Developer in 48 Hours</title>
        <meta
          name="description"
          content="Hire Salesforce Developer and Certified Professionals from us and get a one-stop solution for your salesforce project. Schedule a Developer Interview Now"
        />
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
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Hire Salesforce Developer in 48 Hours"
        />
        <meta
          property="og:description"
          content="Hire Salesforce Developer and Certified Professionals from us and get a one-stop solution for your salesforce project. Schedule a Developer Interview Now"
        />
        <meta
          property="og:image"
          content="/mindforce/bacforce_react_build/images/OG-images/salesforce-developmentcompany.png"
        />
        <meta property="og:url" content="https://bacforce.com/" /> {/*todo*/}
        <link rel="canonical" href="https://bacforce.com/" /> {/*todo*/}
        <link
          rel="icon"
          type="image/x-icon"
          href="/mindforce/bacforce_react_build/images/favicon-icon.png"
        ></link>
      </Head>

      <Header />
      <ThankYou />
      <WeHelp />
      <Footer />
    </>
  );
};

export default index;
