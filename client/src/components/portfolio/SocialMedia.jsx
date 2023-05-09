import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { design_images } from "../../utils/helper";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SocialMedia = () => {
  const images_list = design_images?.map((image, index) => {
    return (
      <div key={index} className="col-md-6 col-lg-4 p-0">
        <div className="thumbnail p-2">
          <div className="thumbnail-inner rounded-3">
            <LazyLoadImage
              effect="blur"
              className=" w-100 h-100 rounded-3"
              src={image}
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="social-media" className="social-media pt-120 pb-5">
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
