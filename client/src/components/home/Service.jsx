import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import {
  IoLogoAmplify,
  IoPersonOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { TbWaveSine } from "react-icons/tb";
import { RxDesktop } from "react-icons/rx";
import { AiOutlineMobile } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { SiNintendogamecube } from "react-icons/si";
import { MdOutlineCreate } from "react-icons/md";
const Service = () => {
  return (
    <section className="service bg-primary pb-5 pt-120">
      <div className="container text-center">
        <SectionMainHeader
          title="What we can do for you"
          header="Services provide for you"
          dec={`There are many variations of passages of Lorem Ipsum available,<br/>
but the majority have suffered alteration.`}
        />

        <div className="services px-xl-4 mt-4 row">
          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <IoLogoAmplify className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">
                  Branding (Logo - Full identity)
                </h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <TbWaveSine className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">
                  Content strategy & Planning
                </h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <MdOutlineCreate className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">Content Creation</h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <IoShareSocialOutline className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">
                  Social Media Management
                </h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <IoPersonOutline className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Moderation</h3>
                <p className="text-dark mb-0  fs-6">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in all.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <RxDesktop className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Website Development</h3>
                <p className="text-dark mb-0  fs-6">
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <AiOutlineMobile className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Mobile Development</h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <FiTrendingUp className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Media Buying</h3>
                <p className="text-dark mb-0  fs-6">
                  The first line of Lorem Ipsum., Lorem ipsum dolor sit amet..
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <SiNintendogamecube className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">SEO</h3>
                <p className="text-dark mb-0  fs-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
