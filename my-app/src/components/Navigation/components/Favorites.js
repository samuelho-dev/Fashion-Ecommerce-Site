import { React } from "react";
import icons from "../../Utils/icons.json";

export default function Favorites({ userFav, setUserFav }) {
  let updatedFav = [...userFav];
  function removeFromFav(userFavoritesIndex) {
    updatedFav = userFav.filter(
      (obj) => obj !== updatedFav[userFavoritesIndex]
    );
    setUserFav(updatedFav);
  }
  return (
    <div className="cartposition">
      <div className="menutab">
        <div className="cartheader">
          <h3>Favorites</h3>
        </div>
        <FavoritesItem userFav={userFav} removeFromFav={removeFromFav} />
      </div>
    </div>
  );
}

function FavoritesItem({ userFav, removeFromFav }) {
  console.log(userFav);
  if (userFav.length === 0) {
    return <div>Select your favorites!</div>;
  } else {
    return (
      <div className="cartitem-container">
        {userFav.map((product, userFavoritesIndex) => {
          return (
            <div className="item-container" key={userFavoritesIndex}>
              <div className="item-details">
                <img
                  src={require("../../../../public/imgs/" +
                    product.img[0] +
                    ".png")}
                  alt={product.productName}
                />
              </div>
              <div className="product-infotext">
                <h5>{product.designer}</h5>
                <p>{product.productName}</p>
              </div>
              <img //TRASH ICON
                src={require("../../../../public/imgs/icons/" +
                  icons[12].source +
                  ".svg")}
                alt={product.productName}
                onClick={() => {
                  removeFromFav(userFavoritesIndex);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
