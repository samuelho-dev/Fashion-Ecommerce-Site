import Banner from "./Banner";
import productData from "../Products/productdata.json";
import banners from "../Frontpage/banners.json";
import FeatureSpotlight from "./FeatureSpotlight";

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
                <div className="left-designer-product">
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
      <section>
        <img
          className="center-banner"
          src={require("../../../public/imgs/" + banners[0].img + ".png")}
          alt=""
        />
      </section>
      <section id="frontpage-selection">
        <a href="products" className="large-frontpage-selection">
          <img
            src={require("../../../public/imgs/" +
              productData[0].img[1] +
              ".png")}
            alt=""
          />
        </a>
        <div className="left-selection">
          <a href="products" className="fp-product-img">
            <img
              src={require("../../../public/imgs/" +
                productData[3].img[0] +
                ".png")}
              alt="/"
            />
          </a>
          <a href="products" className="fp-product-img">
            <img
              src={require("../../../public/imgs/" +
                productData[10].img[0] +
                ".png")}
              alt="/"
            />
          </a>
          <a href="products" className="fp-product-img">
            <img
              src={require("../../../public/imgs/" +
                productData[5].img[0] +
                ".png")}
              alt="/"
            />
          </a>
          <a href="products" className="fp-product-img">
            <img
              src={require("../../../public/imgs/" +
                productData[1].img[0] +
                ".png")}
              alt="/"
            />
          </a>
        </div>
      </section>
      <FeatureSpotlight />
    </>
  );
}
