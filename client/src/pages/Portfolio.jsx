import React, { useEffect } from "react";
import SectionBanner from "../components/SectionBanner";
import Popular from "../components/portfolio/Popular";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const state = useLocation();
  console.log(state);
  useEffect(() => {
    if (state?.state?.navProp) {
      const sec = document.getElementsByClassName(`${state.state.navProp}`);
      sec[0].scrollIntoView({ behavior: "smooth" });
    }
  }, [state.state]);
  return (
    <div className="portfolio">
      <SectionBanner header="Portfolio" main="Home" link="About" />
      <Popular />
    </div>
  );
};

export default Portfolio;
