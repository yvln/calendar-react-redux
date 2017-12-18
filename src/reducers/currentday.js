import actionTypes from "../actions/actionTypes";

const initialState = "";

const currentday = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_DETAILS_DAY:
      return action.payload.day;
    default:
      return state;
  }
};

export default currentday;
