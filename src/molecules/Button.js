import { h, app } from "hyperapp";
import picostyle from "picostyle";
import ClickableStyle from "./ClickableStyle";

const style = picostyle(h);

export default style("button")({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  padding: 0,
  appearance: "none",
  padding: "10px 20px",
  margin: "5px",
  ...ClickableStyle
});
