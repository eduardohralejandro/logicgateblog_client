import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articles/articleSlices";
import authRegisterSlice from "../features/auth/userRegisterSlice";
import userLoginSlice from "../features/login/userLoginSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    register: authRegisterSlice,
    login: userLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
