import React from "react";
import CardSec from "../components/contact/CardSec";
import Form from "../components/contact/Form";
import MapLocation from "../components/contact/Location";
import TopClients from "../components/home/TopClients";
import { BsDot } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="contact-banner position-relative pb-120 pt-80">
        <div className="container">
          <div className="header d-flex flex-column text-center pt-120">
            <h1 className="fw-bolder text-grad_banner lh-lg mb-3">
              Contact With Us
            </h1>
            <div className="d-flex align-items-center justify-content-center">
              <span className=" fs-7">Home</span>
              <BsDot className="mx-2 mx-md-3 fs-5" />
              <span className=" fs-7">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <CardSec />
      <Form />
      <MapLocation />
      <TopClients />
    </div>
  );
};

export default Contact;
