import Banner from "@/components/Banner/Banner";
import Challenges from "@/components/Challenges";
import Header from "@/components/Header/Header";
import HireSalesforceDeveloper from "@/components/HireSalesforceDeveloper";
import TrustedCompany from "@/components/TrustedCompany";
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
  </>
};

export default index;
