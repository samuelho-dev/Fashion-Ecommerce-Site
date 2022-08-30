// imageLoader.js
// inside images object i name routes for my images from assets folder
// and export loadImage function

const images = {
  img1: require("../../assets/images/img1.jpg"),
  img2: require("../../assets/images/img2.png"),
  flagNotFound: require("../../assets/images/flag_not_found.png"),
};

export function loadImage(imageName) {
  if (images.hasOwnProperty(imageName)) {
    return images[imageName];
  }
  return images["flagNotFound"];
}
