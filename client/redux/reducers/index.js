import { sneakerReducer } from "./sneaker";
import { createStore, combineReducers } from "redux";

export const rootReducer = combineReducers({
  sneakers: sneakerReducer,
});
