import { createSlice } from "@reduxjs/toolkit";
import { setIsUserAuthenticated } from "./actions";
const initialState = {
  isUserAuthenticated: false,
};
const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(setIsUserAuthenticated, (state, action) => {
      state.isUserAuthenticated = action.payload;
    });
  },
});
export default commonSlice;
