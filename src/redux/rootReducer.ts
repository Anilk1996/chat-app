import { combineReducers } from "@reduxjs/toolkit";
import commonSlice from "./common/reducers";

const rootReducer = combineReducers({
  [commonSlice.name]: commonSlice.reducer,
});

export default rootReducer;
