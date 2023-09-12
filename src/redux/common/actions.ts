import { createAction } from "@reduxjs/toolkit";

export const setIsUserAuthenticated = createAction<boolean>(
  "Is User Authenticated"
);
