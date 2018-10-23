import { h } from "hyperapp";
import Wrapper from "../atoms/Wrapper";
import Card from "../molecules/Card";
import Button from "../molecules/Button";

export default (state, actions) => (
  <Wrapper style={{ flexDirection: "column" }}>
    <div>
      <h1>{state.count}</h1>
    </div>
    <Wrapper>
      <Button onclick={() => actions.down(1)}>-</Button>
      <Button onclick={() => actions.up(1)}>+</Button>
    </Wrapper>
  </Wrapper>
);
