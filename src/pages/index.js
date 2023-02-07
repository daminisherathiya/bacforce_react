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
  return <>
  <Header></Header>
  <Banner/>
  <TrustedCompany/>
  <Challenges/>
  <WeOffer/>
  <HireSalesforceDeveloper/>
  <Success/>
  <TechnicalExpertise/>
  <SuccessStories/>
  <ProcessofHiring/>
  <Faq/>
  <WeHelp/>
  <Footer/>
  </>
};

export default index;
