import actionTypes from '../actions/actionTypes';

const initialState = {
  day: ''
};

const displaymonth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_DETAILS_DAY:
      return Object.assign({}, state, {
        day: action.payload.day,
        memos: action.payload.memos
      });
    default:
      return state;
  }
};

export default displaymonth;
