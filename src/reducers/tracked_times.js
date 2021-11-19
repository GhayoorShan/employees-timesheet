import _ from "lodash";

//Redux constants
import { ADD_TIME } from "../constants";

export const tracked_times = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      let { time } = action.payload;
      let parsed_time = JSON.parse(JSON.stringify(time));
      return _.concat(state, parsed_time);

    default:
      return state;
  }
};
