import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
const CompanyRefresh = () => {
  return (
    <section className="company-about bg-primary pb-5 pt-120">
      <div className="container text-center">
        <div className="row">
          <div className="mb-4 mb-md-0 col-12 col-lg-5">
            <div className="thumbnail">
              <img
                style={{ width: "543px", height: "auto" }}
                src="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/05/about-1.png"
                className="object-fit-cover w-100 d-block"
                alt="about-1"
                decoding="async"
                loading="lazy"
                srcSet="http://rainbowit.net/themes/imroz/wp-content/uploads/2021/05/about-1.png 543w, http://rainbowit.net/themes/imroz/wp-content/uploads/2021/05/about-1-243x300.png 243w"
                sizes="(max-width: 543px) 100vw, 543px"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="inner px-md-4">
              <div className="text-start">
                <div className="icon bg-danger rounded-circle mb-4">
                  <FiSend className="fs-3 text-white" />
                </div>
                <h2 className="fs-1 fw-bold mb-5">
                  Refreshingly Unique Company About.
                </h2>
                <p className="fs-6 fw-light">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. <br />
                  <br /> A small river named Duden flows by their place and
                  supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences
                </p>
                <Link className="text-grad_link position-relative">
                  <span className="fw-semibold ">PURCHASE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyRefresh;
