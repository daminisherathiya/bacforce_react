import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Challenges from "@/components/Challenges";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import ProcessofHiring from "@/components/ProcessofHiring";
import Success from "@/components/Success";
import SuccessStories from "@/components/SuccessStories";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import TrustedCompany from "@/components/TrustedCompany";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta http-equiv="X-UA-Compatible" content="ie=edge"> */} //todo
        <title>Hire Salesforce Developer in 48 Hours</title>
        <meta
          name="description"
          content="Hire Salesforce Developer and Certified Professionals from us and get a one-stop solution for your salesforce project. Schedule a Developer Interview Now"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
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
          content="https://bacforce.com/main-boot-5/images/og/home-og.png" // todo
        />
        <meta property="og:url" content="https://bacforce.com/" />
        <link rel="canonical" href="https://bacforce.com/" />
      </Head>

      <Header></Header>
      <Banner />
      <TrustedCompany />
      <Challenges />
      <WeOffer />
      <HireSalesforceDeveloper />
      <Success />
      <TechnicalExpertise />
      <SuccessStories />
      <ProcessofHiring />
      <Faq />
      <WeHelp />
      <Footer />
    </>
  );
};

export default index;
