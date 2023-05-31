import React, { useEffect } from "react";
import SectionBanner from "../components/SectionBanner";
import Popular from "../components/portfolio/Popular";
import { useLocation } from "react-router-dom";
import Design from "../components/portfolio/Design";
import SocialMedia from "../components/portfolio/SocialMedia";
import TopClients from "../components/home/TopClients";
import Branding from "../components/portfolio/Branding";

const Portfolio = () => {
  const state = useLocation();

  useEffect(() => {
    console.log(state);
    if (state?.state?.navProp) {
      const sec = document.getElementById(`${state.state.navProp}`);
      sec.scrollIntoView({ behavior: "smooth" });
    }
  }, [state?.state]);
  return (
    <div className="portfolio bg-primary">
      <SectionBanner header="Portfolio" main="Home" link="Portfolio" />
      {/* <Popular /> */}
      <Design />
      <Branding />
      <SocialMedia />
      <TopClients />
    </div>
  );
};

export default Portfolio;
