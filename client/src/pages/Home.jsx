import React from "react";
import Banner from "../components/home/Banner";
import CompanyRefresh from "../components/home/CompanyRefresh";
import Service from "../components/home/Service";
import RecentWorks from "../components/home/RecentWorks";
import Branding from "../components/home/Branding";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyRefresh />
      <Service />
      <RecentWorks />
      <Branding />
    </div>
  );
};

export default Home;
