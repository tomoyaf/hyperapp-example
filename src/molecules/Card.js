import { h, app } from "hyperapp";
import picostyle from "picostyle";
import Wrapper from "../atoms/Wrapper";
import ElevationStyle from "../atoms/ElevationStyle";

const style = picostyle(h);

export default style(Wrapper)(props => ({
  ...ElevationStyle(props.elevation == null ? 2 : props.elevation)
}));
