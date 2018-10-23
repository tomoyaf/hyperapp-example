import { h } from "hyperapp";
import Wrapper from "../atoms/Wrapper";
import Button from "../molecules/Button";
import Text from "../molecules/Text";
import Header from "../organisms/Header";

export default ({ state, actions }) => (
  <Wrapper style={{ flexDirection: "column", width: "100%" }}>
    <Header />
    <Wrapper style={{ flexDirection: "column" }}>
      <Text level="XL">{state.count}</Text>
      <Wrapper>
        <Button onclick={() => actions.down(1)}>
          <Text>Decrement</Text>
        </Button>
        <Button onclick={() => actions.up(1)}>
          <Text>Increment</Text>
        </Button>
        <Button onclick={() => actions.reset()} type="primary">
          <Text defaultColor>Reset</Text>
        </Button>
      </Wrapper>
    </Wrapper>
  </Wrapper>
);
