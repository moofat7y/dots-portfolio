import React from "react";
import CompanyRefresh from "../components/home/CompanyRefresh";
import Work from "../components/about/Work";
import SectionBanner from "../components/SectionBanner";
import TopClients from "../components/home/TopClients";

const About = () => {
  return (
    <div className="about">
      <SectionBanner header="About" main="Home" link="About" />
      <CompanyRefresh />
      <Work />
      <TopClients />
    </div>
  );
};

export default About;
