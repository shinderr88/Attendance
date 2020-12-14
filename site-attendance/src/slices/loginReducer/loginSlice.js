import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginInitialState } from "./loginInitialState";

export const loginDetails = createSlice({
  name: "loginDetails",
  initialState: loginInitialState,
  reducers: {
    loginSuccess: loadingSuccess,
    loginFailure: loadingFailed,
  },
});

function loadingFailed(state, action) {
  state.loginInfo = loginInitialState.loginInfo;
  state.isLoading = false;
  state.error = action.payload;
}

function loadingSuccess(state, action) {
  state.loginInfo = action.payload;
  state.isLoading = false;
  state.error = null;
}