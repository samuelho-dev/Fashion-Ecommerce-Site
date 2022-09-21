import React from "react";
import articleData from "../Articles/articledata.json";

export default function Articles() {
  const displayArticles = articleData.map((article) => {
    if (article.id < 5) {
      return (
        <div className="articles">
          <h3>{article.title}</h3>
          <p className="articletag">{article.tag}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            tempore ullam dolore, enim sunt doloremque id temporibus qui
            voluptatum! Vero.
          </p>
        </div>
      );
    }
  });
  return (
    <div className="article-container">
      <h2>Articles</h2>
      <ul>{displayArticles}</ul>
    </div>
  );
}
