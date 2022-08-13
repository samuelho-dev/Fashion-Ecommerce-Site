import React from "react";
import FrontpageArticles from "../Articles/FrontpageArticles.js";
import ArtistSpotlight from "../Designers/ArtistSpotlight";

export default function FeatureSpotlight() {
  return (
    <section id="feature-spotlight">
      <ArtistSpotlight />
      <FrontpageArticles />
    </section>
  );
}
