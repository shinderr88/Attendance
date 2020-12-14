import { loginDetails } from "./loginSlice";

export const {
  loginSuccess,
  loginFailure,
} = loginDetails.actions;

export default loginDetails.reducer;

export { loginRecord } from "./loginThunk";