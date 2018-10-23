import { h, app } from "hyperapp";
import picostyle from "picostyle";
import Wrapper from "../atoms/Wrapper";
import Colors from "../theme/Colors";

const style = picostyle(h);

const fontSizes = {
  XS: `0.75rem`,
  S: `0.85rem`,
  M: `1.0rem`,
  L: `1.3rem`,
  XL: `1.8rem`
};

const fontPadding = {
  XS: `1px 2px`,
  S: `2px 4px`,
  M: `4px 8px`,
  L: `8px 16px`,
  XL: `16px 32px`
};

export default style(Wrapper)(props => ({
  fontSize: props.level ? fontSizes[props.level] : fontSizes.M,
  padding: props.level ? fontPadding[props.level] : fontPadding.M,
  ...(!props.defaultColor && {
    color: props.level
      ? Colors.molecules.Text[props.level]
      : Colors.molecules.Text.M
  })
}));
