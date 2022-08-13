import React from "react";

import BobbyHundreds from "../images/bobby-hundreds.png";
import CurrieGoat from "../images/curriegoat.png";

import InstagramSVG from "../images/icons/instagram.svg";
import YoutubeSVG from "../images/icons/youtube.svg";
import LinkSVG from "../images/icons/external-link.svg";

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
                <img src={InstagramSVG} alt="/" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeSVG} alt="" />
              </a>
              <a
                href="https://thehundreds.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkSVG} alt="" />
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
                <img src={InstagramSVG} alt="/" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeSVG} alt="" />
              </a>
              <a
                href="https://curriegoat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkSVG} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
