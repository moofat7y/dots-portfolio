import React from "react";

import { CiMobile2, CiEdit, CiMedal } from "react-icons/ci";
const Banner = () => {
  return (
    <section className="home_banner pt-120 bg-primary pb-4 pb-md-5">
      <div className="layer position-relative pt-120">
        <div className="position-absolute d-none d-md-block circle circle-danger"></div>
        <div className="position-absolute d-none d-md-block circle circle-secondary"></div>
        <div className="container text-center">
          <div className="d-flex justify-content-center header">
            <h1 className="fw-bolder text-grad_banner lh-bg text-center">
              Design Driven
              <br /> Development Your
              <br /> Web Products.
            </h1>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="d-flex justify-content-center gap-3 gap-xl-5 flex-wrap flex-lg-nowrap">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiMedal className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2">Award Design</h3>
            <p className="fw-light">
              There are many variations variations of passages of Lorem Ipsum
              available.
            </p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiEdit className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2">Design & Creative</h3>
            <p className="fw-light">
              Passages there are many variations variations of of Lorem Ipsum
              available.
            </p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiMobile2 className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2">App Development</h3>
            <p className="fw-light">
              Variations There are many variations of passages of Lorem Ipsum
              available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
