import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, ILoginAuthor } from "../../api/login/login";
import { RootState } from "@reduxjs/toolkit/query";

interface AuthState {
  data: "";
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  data: "",
  loading: "idle",
  error: null,
  isAuthenticated: false,
  token: localStorage.getItem("token"),
};

export const loginUserAsync = createAsyncThunk(
  "login/loginUser",
  async (data: ILoginAuthor) => {
    return await loginUser(data);
  }
);

const userLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        loginUserAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "idle";
          state.isAuthenticated = true;
          state.token = action.payload;
          localStorage.setItem("token", action.payload?.token);
        }
      )
      .addCase(
        loginUserAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
          state.token = null;
        }
      );
  },
});

export const loginSelect = (state: RootState) => state.login.token;
export const selectLoginIsAuthenticated = (state: RootState) =>
  state.login.isAuthenticated;

export default userLoginSlice.reducer;