import React from "react";
import Banner from "./Banner";
import FeatureSpotlight from "./FeatureSpotlight";

import NewRelease1 from "../images/cloud-horizon-shoe-fiendstore.png";
import NewRelease2 from "../images/carti-anime-sweatshirt-stonislaw.png";
import NewRelease3 from "../images/green-lighter-fiendstore.png";
import NewRelease4 from "../images/pint-fiend-fiendstore.png";
import NewRelease5 from "../images/sweatshirt3-creamy-studios.png";

import StyleImg1 from "../images/avante-garde.png";
import StyleImg2 from "../images/luxury.png";
import StyleImg3 from "../images/minimal.png";
import StyleImg4 from "../images/streetwear.png";
import StyleImg5 from "../images/techwear.png";

export default function Frontpage() {
  return (
    <>
      <Banner />
      <section id="new-releases-container">
        <h2>New Releases</h2>
        <div id="new-releases-cards">
          <img className="product-card" src={NewRelease1} alt="" />
          <img className="product-card" src={NewRelease2} alt="" />
          <img className="product-card" src={NewRelease3} alt="" />
          <img className="product-card" src={NewRelease4} alt="" />
          <img className="product-card" src={NewRelease5} alt="" />
        </div>
      </section>
      <section id="browse-by-style">
        <h2>Browse By Style</h2>
        <div className="style-container">
          <a className="stylelink" href="/">
            <div className="style-img">
              <img src={StyleImg1} alt="" />
            </div>
            <p className="style-description">Avante Garde</p>
          </a>

          <a className="stylelink" href="/">
            <div className="style-img">
              <img src={StyleImg2} alt="" />
            </div>
            <p className="style-description">Luxury</p>
          </a>

          <a className="stylelink" href="/">
            <div className="style-img">
              <img src={StyleImg3} alt="" />
            </div>
            <p className="style-description">Minimal</p>
          </a>

          <a className="stylelink" href="/">
            <div className="style-img">
              <img src={StyleImg4} alt="" />
            </div>
            <p className="style-description">Streetwear</p>
          </a>

          <a className="stylelink" href="/">
            <div className="style-img">
              <img src={StyleImg5} alt="" />
            </div>
            <p className="style-description">Techwear</p>
          </a>
        </div>
      </section>
      <FeatureSpotlight />
    </>
  );
}
