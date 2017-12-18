import { combineReducers } from "redux";
import currentday from "./currentday";
import memos from "./memos";

const rootReducer = combineReducers({
  currentday,
  memos
});

export default rootReducer;
