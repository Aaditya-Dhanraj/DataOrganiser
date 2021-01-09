import {combineReducers} from "redux";
import Settings from "./Settings";
import Auth from "./Auth";
import Common from "./Common";


const reducers = combineReducers({
  settings: Settings,
  auth: Auth,
  common: Common,
});

export default reducers;
