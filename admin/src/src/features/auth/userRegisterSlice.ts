import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "../../api/auth/auth";
import { IAuthor } from "../../interfaces/interfaces";
import { RootState } from "@reduxjs/toolkit/query";

interface AuthState {
  data: "";
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  data: "",
  loading: "idle",
  error: null,
  isAuthenticated: false,
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
        (state, action: PayloadAction<"">) => {
          state.loading = "succeeded";
          state.data = action.payload;
          state.isAuthenticated = true;
        }
      )
      .addCase(
        registerUserAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
          state.isAuthenticated = false;
        }
      );
  },
});

export const { setAuthenticated, setUnauthenticated } =
  authRegisterSlice.actions;

export const authSelect = (state: RootState) => state.register.data;
export const selectIsAuthenticated = (state: RootState) =>
  state.register.isAuthenticated;

export default authRegisterSlice.reducer;
