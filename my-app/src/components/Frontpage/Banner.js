import React, { useState } from "react";
import handleCarouselClick from "../Utils/Carousel";

const banners = [
  {
    src: require("../images/banner/tempbanner.png"),
    alt: "Banner 1",
  },
  {
    src: require("../images/banner/tempbanner.png"),
    alt: "Banner 2",
  },
  {
    src: require("../images/banner/tempbanner.png"),
    alt: "Banner 3",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  return (
    <section id="carousel-container">
      <div className="carousel-carousel">
        <button
          className="carousel-button"
          id="prev-btn"
          onClick={() => handleCarouselClick("prev", setIndex, banners)}
        >
          ⚬
        </button>
        <button
          className="carousel-button"
          id="next-btn"
          onClick={() => handleCarouselClick("next", setIndex, banners)}
        >
          ⚬
        </button>
        <img
          className="carousel-img"
          src={banners[index].src}
          alt={banners[index].alt}
        />
      </div>
    </section>
  );
}
