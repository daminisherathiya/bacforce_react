import Banner from "@/components/Banner/Banner";
import Challenges from "@/components/Challenges";
import Header from "@/components/Header/Header";
import TrustedCompany from "@/components/TrustedCompany";
import React from "react";

const index = () => {
  return <>
  <Header></Header>
  <Banner/>
  <TrustedCompany/>
  <Challenges/>
  </>
};

export default index;
