export default function handleMouseOver(action, setHoverText) {
  if (action === "over") {
    setHoverText(true);
  } else if (action === "out") {
    setHoverText(false);
  }
}
