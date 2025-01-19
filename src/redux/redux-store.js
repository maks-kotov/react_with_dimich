import { combineReducers, legacy_createStore } from "redux";
import reducerMain from "./reducer-main";
import reducerMessages from "./reducer-messages";
import reducerAside from "./reducer-aside";

let reducers = combineReducers({
    mainPage: reducerMain,
    messagesPage: reducerMessages,
    asidePage: reducerAside
})
let store = legacy_createStore(reducers);

export default store;