import { applyMiddleware, createStore } from "redux";
import watchlistReducer from "./watchlist-reducer";
import { thunk } from "redux-thunk";

const store = createStore(watchlistReducer, applyMiddleware(thunk));

export default store;
