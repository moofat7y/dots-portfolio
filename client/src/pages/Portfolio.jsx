import React, { useEffect } from "react";
import SectionBanner from "../components/SectionBanner";
import Popular from "../components/portfolio/Popular";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const state = useLocation();
  useEffect(() => {
    if (state?.state?.navProp) {
      const sec = document.getElementsByClassName(`${state.state.navProp}`);
      console.log(sec[0]);
      sec[0].scrollIntoView({ behavior: "smooth" });
    }
    // return () => (state.state.navProp = undefined);
  }, [state?.state]);
  return (
    <div className="portfolio">
      <SectionBanner header="Portfolio" main="Home" link="Portfolio" />
      <Popular />
    </div>
  );
};

export default Portfolio;
