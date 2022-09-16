export default function handleCarouselClick(action, setIndex, array) {
  console.log(action);
  if (action === "prev") {
    setIndex((prevValue) => (prevValue > 0 ? prevValue - 1 : array.length - 1));
    console.log("prev");
  }
  if (action === "next") {
    setIndex((prevValue) => (prevValue < array.length - 1 ? prevValue + 1 : 0));
    console.log("next");
  }
}
