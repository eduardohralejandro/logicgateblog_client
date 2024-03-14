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
  reducers: {},
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
        }
      )
      .addCase(
        registerUserAsync.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const authSelect = (state: RootState) => state.register.data;

export default authRegisterSlice.reducer;
