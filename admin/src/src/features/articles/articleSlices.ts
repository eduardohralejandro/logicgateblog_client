import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchArticles } from "../../api/article/articles";
import { IArticleRequest, createArticle } from "../../api/article/postArticle";
import { Article } from "../../interfaces/interfaces";
import { RootState } from "@reduxjs/toolkit/query";

interface ArticlesState {
  data: Article[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ArticlesState = {
  data: [],
  loading: "idle",
  error: null,
};

export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    return await fetchArticles();
  }
);

export const postArticlesAsync = createAsyncThunk(
  "articles/postArticles",
  async (data: IArticleRequest, thunkAPI) => {
    try {
      const response = await createArticle(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchArticlesAsync.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.loading = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(
        fetchArticlesAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
        }
      )
      .addCase(postArticlesAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        postArticlesAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "idle";
          state.data = action.payload;
        }
      )
      .addCase(
        postArticlesAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const selectArticles = (state: RootState) => state.articles.data;

export default articlesSlice.reducer;