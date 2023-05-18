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
                src="https://res.cloudinary.com/dzlrv81i7/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683525733/samples/dots-portfolio/about-1_ayqgoe.jpg?_s=public-a"
                className="object-fit-cover w-100 d-block"
                alt="about-1"
                decoding="async"
                loading="lazy"
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
                <h2 className="fs-1 fw-bold mb-5">About Us:</h2>
                <p className="fs-6 fw-light">
                  Dots Hub is a digital marketing agency aiming to make your
                  Digital channels and social media content closer to your
                  target audience. <br />
                  <br />
                  Through our passion for looking for new trends and innovative
                  ideas.
                </p>
                <Link to="/about" className="text-grad_link position-relative">
                  <span className="fw-semibold ">About Us</span>
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
