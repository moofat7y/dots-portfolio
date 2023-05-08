import React from "react";
import CardSec from "../components/contact/CardSec";
import Form from "../components/contact/Form";
import MapLocation from "../components/contact/Location";
import Branding from "../components/home/Branding";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="contact-banner position-relative pb-120 pt-80">
        <div className="container">
          <div className="header d-flex flex-column text-center pt-120">
            <h1
              //   style={{ marginBottom: "10px" }}
              className="fw-bolder text-grad_banner lh-lg mb-3"
            >
              Contact With Us
            </h1>
            <p className="fs-6 fw-semibold">
              Lorem Ipsum is not simply random text.
            </p>
          </div>
        </div>
      </div>
      <CardSec />
      <Form />
      <MapLocation />
      <Branding />
    </div>
  );
};

export default Contact;
