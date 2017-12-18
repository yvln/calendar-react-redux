import actionTypes from '../actions/actionTypes';

const initialState = []

const memos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_A_MEMO:
      return [...state, {
        id: action.payload.id,
        date: action.payload.date,
        text: {
          date: action.payload.text.date,
          content: action.payload.text.content,
        }
      }];
    case actionTypes.DELETE_A_MEMO:
      // const newArray = [];
      // state.forEach(e => {
      //   if (e.id !== action.payload.id) {
      //     newArray.push(e)
      //   }
      // })
      // return newArray;
      return state.reduce( (acc, curr) => {
        if (curr.id !== action.payload.id ) {
          acc.push(curr);
        }
        return acc;
      }, []);

    default:
      return state;
  }
};

export default memos;
