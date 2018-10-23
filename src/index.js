import { app } from "hyperapp";
import actions from "./Actions";
import Routes from "./Routes.js";
import { location } from "@hyperapp/router";
import './style.scss';

const state = {
  count: 0,
  location: location.state
};

const main = app(state, actions, Routes, document.body);
const unsubscribe = location.subscribe(main.location);
