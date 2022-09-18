import { React, useState } from "react";
import handleCarouselClick from "../../Utils/Carousel";
import icons from "../../Utils/icons.json";
import handleMouseOver from "../../Utils/Hover";

export default function ProductDisplay({
  displayedProducts,
  addToCart,
  handleSizeBtnClick,
  sizeBtnSelected,
}) {
  return (
    <div className="display-container">
      {displayedProducts.map((product) => {
        return (
          <div className="product-details" key={product.id}>
            <ProductImgCarousel
              imgs={product.img}
              description={product.description}
            />
            <h5>{product.designer.toUpperCase()}</h5>
            <p>{product.productName.toUpperCase()}</p>
            <p>${product.price}</p>
            <div className="sizebtn-container">
              {product.sizes.map((size) => {
                return (
                  <button
                    key={size}
                    className={`sizeBtn ${
                      sizeBtnSelected.activeSizeBtn === size &&
                      sizeBtnSelected.id === product.id
                        ? "activeSizeBtn"
                        : ""
                    }`}
                    onClick={() => handleSizeBtnClick(size, product.id)}
                    value={size.toUpperCase()}
                  >
                    <p>{size.toUpperCase()}</p>
                  </button>
                );
              })}
            </div>
            <button
              className="addtocart"
              onClick={() => {
                addToCart({
                  id: product.id,
                  designer: product.designer,
                  sizes: sizeBtnSelected.activeSizeBtn,
                  productName: product.productName,
                  img: product.img,
                  price: product.price,
                  quantity: 1,
                });
              }}
            >
              <h5>Add to Cart</h5>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function ProductImgCarousel(Arr) {
  const [hoverText, setHoverText] = useState(false);
  const [index, setIndex] = useState(0);
  console.log(Arr);

  return (
    <div className="product-img">
      {hoverText && <p className="product-description">{Arr.description}</p>}
      <div
        className="banner-nav left"
        onClick={() => handleCarouselClick("prev", setIndex, Arr.imgs)}
      >
        <img
          src={require("../../../../public/imgs/icons/" +
            icons[0].source +
            ".svg")}
          alt={icons[0].name}
          className="carousel-button prev"
        />
      </div>
      <div
        className="banner-nav right"
        onClick={() => handleCarouselClick("next", setIndex, Arr.imgs)}
      >
        <img
          src={require("../../../../public/imgs/icons/" +
            icons[1].source +
            ".svg")}
          alt={icons[1].name}
          className="carousel-button next"
        />
      </div>
      <img
        onMouseOver={() => handleMouseOver("over", setHoverText)}
        onMouseOut={() => handleMouseOver("out", setHoverText)}
        src={require("../../../../public/imgs/" + Arr.imgs[index] + ".png")}
        alt=""
      />
    </div>
  );
}
