import Banner from "./Banner";
import productData from "../Products/productdata.json";
import FeatureSpotlight from "./FeatureSpotlight";

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
        <h2>introducing... DIVINITIES</h2>
        {productData.map((obj) => {
          if (obj.designer === "DIVINITIES") {
            return (
              <div id="featured-designer">
                <div className="square">
                  <img
                    className="designer-img"
                    src={require("../../../public/imgs/" + obj.img[1] + ".png")}
                    alt={obj.designer}
                  />
                  <img
                    className="designer-img"
                    src={require("../../../public/imgs/" + obj.img[0] + ".png")}
                    alt={obj.designer}
                  />
                  <img
                    className="designer-img"
                    src={require("../../../public/imgs/" + obj.img[2] + ".png")}
                    alt={obj.designer}
                  />
                  <img
                    className="designer-img"
                    src={require("../../../public/imgs/" + obj.img[2] + ".png")}
                    alt={obj.designer}
                  />
                </div>
                <img
                  className="large-designer-feature"
                  src={require("../../../public/imgs/" + obj.profile + ".png")}
                  alt={obj.designer}
                />
              </div>
            );
          }
        })}
      </section>
      <section id="browse-by-style">
        <h2>Browse our selection</h2>
        <div className="style-container"></div>
      </section>
      <FeatureSpotlight />
    </>
  );
}
