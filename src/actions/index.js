import { TEST, ADD_TIME } from "../constants";

export const runTest = () => ({
  type: TEST,
});

export const addTime = (time) => ({
  type: ADD_TIME,
  payload: {
    time,
  },
});
