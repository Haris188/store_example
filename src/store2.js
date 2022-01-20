import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter2.slice'

const reducer = combineReducers({
  count: counterSlice
});

const store = configureStore({
  reducer
});

export default store;