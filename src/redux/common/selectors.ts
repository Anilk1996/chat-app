import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

export const commonState = (state: RootState) => state.common;

export const isUserAuthenticated = createSelector(
  commonState,
  (common) => common.isUserAuthenticated
);
