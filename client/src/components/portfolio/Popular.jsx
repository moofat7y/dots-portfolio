import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import Slider from "../Slider";
import { slider_images } from "../../utils/helper";
import Design from "./Design";
import Branding from "../home/Branding";
import SocialMedia from "./SocialMedia";
const Popular = () => {
  return (
    <section id="design" className="design bg-primary pb-5 pt-120">
      <SectionMainHeader
        title="Populer"
        header="Design"
        dec="There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration."
      />

      <Slider data={slider_images} />
      <Design />
      <SocialMedia />
      <Branding />
    </section>
  );
};

export default Popular;
