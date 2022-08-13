import React from "react";

import InstagramSVG from "../images/icons/instagram.svg";
import YoutubeSVG from "../images/icons/youtube.svg";
import MusicSVG from "../images/icons/music.svg";
import MailSVG from "../images/icons/mail.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <h1 className="logo">Streetwear Store</h1>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeSVG} alt="/" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramSVG} alt="/" />
              </a>
            </li>
            <li>
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MusicSVG} alt="/" />
              </a>
            </li>
            <li>
              <a
                href="mailto:samuelho343@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MailSVG} alt="/" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
