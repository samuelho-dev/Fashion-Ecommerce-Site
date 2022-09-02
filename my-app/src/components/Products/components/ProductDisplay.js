import React from "react";
import productData from "../productdata.json";

export default function ProductPreview() {
  const displayProduct = productData.map((product) => (
    <div className="image-container">
      <h3>{product.designer.toUpperCase()}</h3>
      <p>{product.productName.toUpperCase()}</p>
      <p>{product.price}</p>
    </div>
  ));

  return <div className="display-container">{displayProduct}</div>;
}

// export default function ProductDisplay({ filterCriteria }) {
//   return (
//     <div className="display-container">
//       <div className="image-container">
//         <img src={filterCriteria.img.src} alt="" />
//         <h3>{filterCriteria.designer.toUpperCase()}</h3>
//         <p>{filterCriteria.name.toUpperCase()}</p>
//         <p>{filterCriteria.price}</p>
//       </div>
//     </div>
//   );
// }
