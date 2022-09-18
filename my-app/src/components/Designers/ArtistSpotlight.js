import React from "react";

import BobbyHundreds from "../images/bobby-hundreds.png";
import CurrieGoat from "../images/curriegoat.png";
import icons from "../Utils/icons.json";

export default function ArtistSpotlight() {
  return (
    <div className="artist-spotlight">
      <h2>Artist Spotlight</h2>
      <div className="artist-container">
        <div className="artist-container-1">
          <div className="artist-info">
            <h3>Bobby Hundreds</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              ullam, saepe explicabo eum vel molestiae veritatis omnis, natus a
              deleniti, iure eligendi quam quisquam maiores repellendus
              aspernatur atque fuga consectetur.
            </p>
          </div>
          <div className="artist-img-container">
            <a
              href="https://thehundreds.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="artist-pfp" src={BobbyHundreds} alt="" />
            </a>
            <div className="artist-contact">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[7].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[11].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
              <a
                href="https://thehundreds.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[6].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="artist-container-2">
          <div className="artist-info">
            <h3>Currie Goat</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              ullam, saepe explicabo eum vel molestiae veritatis omnis, natus a
              deleniti, iure eligendi quam quisquam maiores repellendus
              aspernatur atque fuga consectetur.
            </p>
          </div>
          <div className="artist-img-container">
            <a
              href="https://curriegoat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="artist-pfp" src={CurrieGoat} alt="" />
            </a>
            <div className="artist-contact">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[7].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[11].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
              <a
                href="https://curriegoat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[6].source +
                    ".svg")}
                  alt={icons[11].name}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
