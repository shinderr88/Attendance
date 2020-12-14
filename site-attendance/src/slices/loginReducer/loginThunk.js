import {
  loginSuccess,
  loginFailure,
} from "./index";

import {
  login,
} from "../../services/loginService";

export const loginRecord = (request) => async (dispatch, getState) => {
  try {
    var loginInfo = await login(request);
    if (loginInfo.status) {
      dispatch(loginSuccess(loginInfo));
    } else {
      var errResponse = handleErrorResponse(loginInfo);
      dispatch(loginFailure({ message: errResponse }));
    }
  } catch (err) {
    dispatch(loginFailure(err.toString()));
  }
};


export function handleErrorResponse(responseJSON) {
  return responseJSON;
}
