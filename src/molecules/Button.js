import { h, app } from "hyperapp";
import picostyle from "picostyle";
import ClickableStyle from "./ClickableStyle";
import Colors from "../theme/Colors";

const style = picostyle(h);

const fontWeights = {
  default: `normal`,
  primary: `bold`
};

export default style("button")(props => ({
  backgroundColor: props.type
    ? Colors.molecules.Button.backgroundColor[props.type]
    : Colors.molecules.Button.backgroundColor.default,
  color: props.type
    ? Colors.molecules.Button.color[props.type]
    : Colors.molecules.Button.color.default,
  fontWeight: props.type ? fontWeights[props.type] : fontWeights.default,
  border: "none",
  cursor: "pointer",
  outline: "none",
  padding: 0,
  appearance: "none",
  padding: "8px 15px",
  margin: "5px",
  borderRadius: "5px",
  ...ClickableStyle
}));
