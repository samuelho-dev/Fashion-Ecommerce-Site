import React, { useState } from "react";
import handleCarouselClick from "../Utils/Carousel";
import banners from "../Frontpage/banners.json";

export default function Banner() {
  const [index, setIndex] = useState(0);

  return (
    <section id="carousel-container">
      <div className="carousel-carousel">
        <button
          className="carousel-button prev"
          onClick={() => handleCarouselClick("prev", setIndex, banners)}
        >
          ⚬
        </button>
        <button
          className="carousel-button next"
          onClick={() => handleCarouselClick("next", setIndex, banners)}
        >
          ⚬
        </button>
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
