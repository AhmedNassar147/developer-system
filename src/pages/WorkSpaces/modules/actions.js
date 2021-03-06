import {
  FETCH_MY_WORK_SPACES,
  FETCH_MY_WORK_SPACES_FINISHED,
  ON_CREATE_WORK_SPACE,
  ON_CREATE_WORK_SPACE_FINISHED,
  WORK_SPACE_FORM_CHANGED
} from "./types";

export const fetchWorkSpaces = uuid => ({
  type: FETCH_MY_WORK_SPACES,
  uuid
});

export const fetchWorkSpacesFinished = newState => ({
  type: FETCH_MY_WORK_SPACES_FINISHED,
  newState
});

export const onCreateWorkSpace = () => ({
  type: ON_CREATE_WORK_SPACE
});

export const onCreateWorkSpaceFinished = newState => ({
  type: ON_CREATE_WORK_SPACE_FINISHED,
  newState
});

export const onFormChanged = value => ({
  type: WORK_SPACE_FORM_CHANGED,
  value
});
