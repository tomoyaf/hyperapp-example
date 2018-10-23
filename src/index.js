import { app } from "hyperapp";
import actions from "./Actions";
import Routes from "./Routes.js";
import { location } from "@hyperapp/router";

const state = {
  count: 0,
  location: location.state
};
console.log("first");

app(state, actions, Routes, document.body);
