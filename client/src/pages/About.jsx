import React from "react";
import CompanyRefresh from "../components/home/CompanyRefresh";
import Branding from "../components/home/Branding";
import Work from "../components/about/Work";
import SectionBanner from "../components/SectionBanner";

const About = () => {
  return (
    <div className="about">
      <SectionBanner header="About" main="Home" link="About" />
      <CompanyRefresh />
      <Work />
      <Branding />
    </div>
  );
};

export default About;
