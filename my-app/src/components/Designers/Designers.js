import React from "react";
import productData from "../Products/productdata.json";

export default function Designers() {
  //Uses productData to access designer name
  const designerArray = productData.map((product) =>
    product.designer.toUpperCase()
  );

  //Filters duplicate designers and sorts alphabetically
  const designerName = designerArray
    .filter(
      (designer, id, designerArray) => designerArray.indexOf(designer) === id
    )
    .sort((a, b) => a.localeCompare(b, "fr"));

  console.log(designerName);
  //Array with just first letter
  const categories = designerName
    .map((des) => des.substring(0, 1))
    .filter((des, id, designerName) => designerName.indexOf(des) === id);

  console.log(categories);
  const store = categories.map((letter) => {
    return {
      category: letter,
      designers: designerName.filter((des) => des[0] === letter),
    };
  });

  function changeBackground(e) {
    e.target.style.background = "white";
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = "none";
  }

  console.log(store);
  return (
    <>
      <div className="designer-container">
        {store.map((cat) => (
          <ul>
            <h2>{cat.category}</h2>
            <div className="name-container">
              {cat.designers.map((des) => (
                <li
                  className="letter-block"
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundLeave}
                >
                  <h5>{des}</h5>
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}
