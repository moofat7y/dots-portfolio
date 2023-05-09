import React from "react";
import { design_images } from "../../utils/helper";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Design = () => {
  const images_list = design_images?.map((image, index) => {
    return (
      <div key={index} className="col-md-6 col-lg-4 p-0">
        <div className="thumbnail p-2">
          <div className="thumbnail-inner rounded-3">
            <LazyLoadImage
              effect="blur"
              className=" rounded-3 w-100 h-100"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="all-design">
      <div className="container">
        <div className="images row">{images_list}</div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary shadow-secondary fadeup py-form px-4">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Design;
