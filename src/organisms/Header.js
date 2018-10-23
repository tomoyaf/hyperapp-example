import { h, app } from "hyperapp";
import picostyle from "picostyle";
import { Link } from "@hyperapp/router";
import Card from "../molecules/Card";
import Colors from "../theme/Colors";
import Text from "../molecules/Text";
import config from "../config";

const style = picostyle(h);

const StyledCard = style(Card)(props => ({
  backgroundColor: Colors.organisms.Header.backgroundColor,
  color: Colors.organisms.Header.color,
  width: "100%",
  height: "56px",
  padding: "0 10px"
}));

export default ({ state, actions }) =>
  <StyledCard elevation={1}>
    <Link to={`${config.BASE_URL}hasdif`} style={{textDecoration: "none"}}>
      <Text level="M" style={{fontWeight: "bold"}}>
        hyperapp-boilerplate
      </Text>
    </Link>
  </StyledCard>;
