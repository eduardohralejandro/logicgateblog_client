import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articles/articleSlices";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
