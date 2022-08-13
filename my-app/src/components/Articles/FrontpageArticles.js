import React from "react";
import articleData from "../Articles/articledata.json";

export default function Articles() {
  const displayArticles = articleData.map((article) => (
    <div className="articles">
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  ));

  return (
    <div className="article-container">
      <h2>Articles</h2>
      <ul>{displayArticles}</ul>
    </div>
  );
}
