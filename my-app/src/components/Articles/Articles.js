import React from "react";
import articleData from "../Articles/articledata.json";

export default function Articles() {
  console.log(articleData[0]);
  return (
    <>
      {articleData.map((article) => {
        if (article.id === 1) {
          return (
            <div className="headline-article">
              <img
                className="headline-article-img"
                src={require("../../../public/imgs/" + article.img + ".png")}
                alt={article.title}
              />
              <div className="article-title-container">
                <h1 className="headline-title">{article.title}</h1>
                <div className="article-info">
                  <p className="articletag">{article.tag}</p>
                  <p>{article.author}</p>
                  <p>{article.date}</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa neque assumenda ratione animi temporibus nostrum
                    voluptas dolorem reprehenderit, dignissimos, tempore porro
                    nam hic ea? Praesentium cumque dicta totam voluptas illum,
                    nihil, delectus ipsa voluptatibus rem hic autem est quaerat
                    eius quibusdam rerum itaque ullam repudiandae consequatur
                    libero a asperiores nemo cupiditate. Illo ex cumque,
                    laboriosam doloribus esse praesentium sapiente. Unde
                    repellendus eligendi error quidem molestiae iusto
                    necessitatibus libero ducimus. Delectus modi magni dolorem
                    accusantium ipsam labore optio? Veritatis hic quia laborum.
                    Iste dolor libero suscipit earum sunt voluptatem natus
                    iusto. Nihil cumque eveniet natus saepe maiores, aut
                    perferendis itaque sint?
                  </p>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="article-content-container">
              <div className="left-article">
                <div className="article">
                  <div className="article-img-container">
                    <div className="article-info">
                      <p className="articletag">{article.tag}</p>
                      <p>{article.author}</p>
                      <p>{article.date}</p>
                    </div>
                    <img
                      className="article-img"
                      src={require("../../../public/imgs/" +
                        article.img +
                        ".png")}
                      alt={article.title}
                    />
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Cumque minus esse voluptatibus deserunt blanditiis
                      dignissimos tempora! Iste iusto quam corrupti!
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="right-music">
                <h3>Music</h3>
                <div>
                  <h5>Title</h5>
                  <img src="/" alt="/" />
                </div>
              </div> */}
            </div>
          );
        }
      })}
    </>
  );
}
