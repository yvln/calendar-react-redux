import actionTypes from '../actions/actionTypes';

const initialState = []

const memos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_A_MEMO:
      return [...state, {
        index: action.payload.index,
        date: action.payload.date,
        text: {
          date: action.payload.text.date,
          content: action.payload.text.content,
        }
      }];
    case actionTypes.DELETE_A_MEMO:
      const newArray = [];
      [...state].forEach(e => {
        if (e.index !== action.payload.index) {
          newArray.push(e)
        }
      })
      return newArray;
    default:
      return state;
  }
};

export default memos;
