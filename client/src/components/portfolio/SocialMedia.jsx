import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { design_images } from "../../utils/helper";

const SocialMedia = () => {
  const images_list = design_images?.map((image, index) => {
    return (
      <div key={index} className="col-md-6 col-lg-4 p-0">
        <div className="thumbnail p-2">
          <div className="thumbnail-inner rounded-3">
            <img className="ratio ratio-4x3 rounded-3" src={image} alt="" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="social-media pt-120 pb-5">
      <SectionMainHeader
        title="Social Media"
        header="Design"
        dec="There are many variations of passages of Lorem Ipsum available,<br/>but the majority have suffered alteration."
      />
      <div className="container">
        <div className="images row">{images_list}</div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary shadow-secondary fadeup py-form px-4">
          Show More
        </button>
      </div>
    </section>
  );
};

export default SocialMedia;
