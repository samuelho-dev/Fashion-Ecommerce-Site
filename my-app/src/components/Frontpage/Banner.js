import React, { useState } from "react";

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

  const handleCarouselClick = (action) => {
    if (action === "previous") {
      setIndex((prevValue) =>
        prevValue > 0 ? prevValue - 1 : banners.length - 1
      );
      console.log("prev");
    }
    if (action === "next") {
      setIndex((prevValue) =>
        prevValue < banners.length - 1 ? prevValue + 1 : 0
      );
      console.log("next");
    }
  };

  return (
    <section id="carousel-container">
      <div className="carousel-carousel">
        <button
          className="carousel-button"
          id="prev-btn"
          onClick={() => handleCarouselClick("prev")}
        >
          ⚬
        </button>
        <button
          className="carousel-button"
          id="next-btn"
          onClick={() => handleCarouselClick("next")}
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
