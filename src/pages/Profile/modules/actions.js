import { FETCH_USER_INFO, FETCH_USER_INFO_FINISHED } from "./types";

export const getUserData = () => ({
  type: FETCH_USER_INFO
});

export const getUserDataFinished = userInfo => ({
  type: FETCH_USER_INFO_FINISHED,
  userInfo
});
