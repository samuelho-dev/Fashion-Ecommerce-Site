import React from "react";
import icons from "../Utils/icons.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <ul className="footer-links">
            <li>
              <a
                href="https://www.youtube.com"
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
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[7].source +
                    ".svg")}
                  alt={icons[7].name}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[9].source +
                    ".svg")}
                  alt={icons[9].name}
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:samuelho343@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../../public/imgs/icons/" +
                    icons[8].source +
                    ".svg")}
                  alt={icons[8].name}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
