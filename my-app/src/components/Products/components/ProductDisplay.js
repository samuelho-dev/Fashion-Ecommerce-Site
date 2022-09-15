import { React } from "react";

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
            <div className="product-img">
              <img
                src={require("../../../../public/imgs/" + product.img + ".png")}
                alt={product.productName.toUpperCase()}
              />
            </div>
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
