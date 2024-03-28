import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "../../api/auth/auth";
import { IAuthor } from "../../interfaces/interfaces";
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

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (data: IAuthor) => {
    return await registerUser(data);
  }
);

const authRegisterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<"">) => {
      state.data = action.payload;
      state.isAuthenticated = true;
    },
    setUnauthenticated: (state) => {
      state.data = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        registerUserAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "succeeded";
          state.data = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem("token", action.payload?.token);
        }
      )
      .addCase(
        registerUserAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
          state.isAuthenticated = false;
          state.token = null;
        }
      );
  },
});

export const { setAuthenticated, setUnauthenticated } =
  authRegisterSlice.actions;

export const authSelect = (state: RootState) => state.register?.data;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth?.isAuthenticated;

export default authRegisterSlice.reducer;
