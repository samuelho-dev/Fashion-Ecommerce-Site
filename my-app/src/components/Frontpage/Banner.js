import React, { useState } from "react";
import handleCarouselClick from "../Utils/Carousel";
import banners from "../Frontpage/banners.json";
import icons from "../Utils/icons.json";

export default function Banner() {
  const [index, setIndex] = useState(0);

  return (
    <section id="carousel-container">
      <div className="carousel-carousel">
        <div
          className="banner-nav left"
          onClick={() => handleCarouselClick("prev", setIndex, banners)}
        >
          <img
            src={require("../../../public/imgs/icons/" +
              icons[0].source +
              ".svg")}
            alt={icons[0].name}
            className="carousel-button prev"
          />
        </div>
        <div
          className="banner-nav right"
          onClick={() => handleCarouselClick("next", setIndex, banners)}
        >
          <img
            src={require("../../../public/imgs/icons/" +
              icons[1].source +
              ".svg")}
            alt={icons[1].name}
            className="carousel-button next"
          />
        </div>
        <img
          className="carousel-img"
          src={require("../../../public/imgs/" + banners[index].img + ".png")}
          alt={banners[index].title}
        />
        <div className="bannerinfo-container">
          <p className="banner-title">{banners[index].title}</p>
          <p className="banner-description">{banners[index].btntext}</p>
        </div>
      </div>
    </section>
  );
}
