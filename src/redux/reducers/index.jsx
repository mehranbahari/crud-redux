import { combineReducers } from "redux";
import { logReducer } from "./logReducer";
import { techsReducer } from "./techreducer";

export default combineReducers({ log: logReducer, tech: techsReducer });
