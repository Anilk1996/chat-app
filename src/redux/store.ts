import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import commonSlice from "./common/reducers";

const loadState = () => {
  try {
    const common = sessionStorage.getItem(commonSlice.name);
    if (common) {
      const commonD = { [commonSlice.name]: JSON.parse(common) };
      console.log(commonD, "aaaaaaa");
      if (commonD === null) {
        return {};
      }
      return { ...commonD };
    }
  } catch (err) {
    return {};
  }
};
const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
console.log(loadState(), "sdddddd", store.getState());

export type AppDispatch = typeof store.dispatch;
export default store;
