import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { NavLink } from "react-router-dom";
const RecentWorks = () => {
  return (
    <section className="recent-work bg-primary pb-5 pt-120">
      <div className="container">
        <SectionMainHeader
          title="Our project"
          header="Some of our Recent Works"
          dec={`There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.`}
        />

        <div className="works px-xl-4 mt-4 row">
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "design" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <span className="text-light d-block mb-3">
                  Application Development
                </span>
                <h3 className="fw-bold">Design</h3>
              </div>
              <div className="inner">
                <img
                  className=""
                  loading="lazy"
                  src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/12/pt-7-390x532.jpg"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "social-media" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <span className="text-light d-block mb-3">
                  Application Development
                </span>
                <h3 className="fw-bold">Social Media</h3>
              </div>
              <div className="inner">
                <img
                  className=""
                  loading="lazy"
                  src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/12/pt-8-390x532.jpg"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "branding" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <span className="text-light d-block mb-3">
                  Application Development
                </span>
                <h3 className="fw-bold">Branding</h3>
              </div>
              <div className="inner">
                <img
                  className=""
                  loading="lazy"
                  src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/05/dp-big-portfolio-03-390x532.jpg"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
