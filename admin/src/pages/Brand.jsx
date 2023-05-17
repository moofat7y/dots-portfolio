import React from "react";
import SectionMainHeader from "../components/SectionMainHeader";
import BrandList from "../components/brand/BrandList";

const Brand = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="brand" header="manage brand images" />
      <div className="container">
        <BrandList />
      </div>
    </section>
  );
};

export default Brand;
