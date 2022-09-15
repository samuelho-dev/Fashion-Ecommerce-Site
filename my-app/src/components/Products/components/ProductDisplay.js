import { React, useState } from "react";
import handleCarouselClick from "../../Utils/Carousel";

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
            <ProductImgCarousel imgs={product.img} />
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
  console.log(Arr.imgs);
  const [index, setIndex] = useState(0);
  return (
    <div className="product-img">
      <button
        className="carousel-button prev"
        onClick={() => handleCarouselClick("prev", setIndex, Arr.imgs)}
      ></button>
      <button
        className="carousel-button next"
        onClick={() => handleCarouselClick("next", setIndex, Arr.imgs)}
      ></button>
      <img
        src={require("../../../../public/imgs/" + Arr.imgs[index] + ".png")}
        alt=""
      />
    </div>
  );
}
