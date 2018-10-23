import { h } from "hyperapp";
import Wrapper from "../atoms/Wrapper";
import Text from "../molecules/Text";
import Header from "../organisms/Header";

export default ({ state, actions }) => {
  console.log(state);
  return (
  <Wrapper style={{ flexDirection: "column", width: "100%" }}>
    <Header />
    <Wrapper style={{ flexDirection: "column" }}>
      <Text level="XL">404 Not Found</Text>
    </Wrapper>
  </Wrapper>
);}
