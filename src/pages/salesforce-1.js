import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Challenges from "@/components/Challenges";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header/PPC/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import ProcessofHiring from "@/components/ProcessofHiring";
import Success from "@/components/Success";
import SuccessStories from "@/components/SuccessStories";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import TrustedCompany from "@/components/TrustedCompany";
import WeHelp from "@/components/WeHelp";
import WeOffer from "@/components/WeOffer";
import Meta from "@/components/Meta";
import { salesforce1Meta } from "@/data/meta";

// todo: add context variables
const index = () => {
  return (
    <>
      <Head>
        <Meta data={salesforce1Meta} />
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
