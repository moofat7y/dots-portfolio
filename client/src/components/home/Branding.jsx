import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { barnding_images } from "../../utils/helper";

const Branding = () => {
  const branding_list = barnding_images?.map((image, index) => {
    return (
      <li key={index} className="col-6 col-sm-4 col-lg-3 col-xl-2">
        <div className="box p-4">
          <img className="w-100 h-100" src={image} alt="" />
        </div>
      </li>
    );
  });
  return (
    <section id="branding" className="branding bg-primary pb-5 pt-120">
      <div className="container">
        <SectionMainHeader
          title="Top clients"
          header="We worked with brands."
          dec={``}
        />
        <ul
          className="branding-list px-0 row justify-content-center"
          style={{ listStyle: "none" }}
        >
          {branding_list}
        </ul>
        <div className="branding-dev"></div>
      </div>
    </section>
  );
};

export default Branding;
