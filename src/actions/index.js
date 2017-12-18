import actionTypes from "./actionTypes";

export const displayDetailsDays = day => {
  return {
    type: actionTypes.DISPLAY_DETAILS_DAY,
    payload: {
      day: day
    }
  };
};

let id = 0;

export const addAMemo = (text, dayCalendar) => {
  id++;
  let day = new Date().getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = `${day}/${month}/${year}`;
  return {
    type: actionTypes.ADD_A_MEMO,
    payload: {
      id: id,
      date: dayCalendar,
      text: {
        date: fullDate,
        content: text
      }
    }
  };
};

export const deleteAMemo = id => {
  return {
    type: actionTypes.DELETE_A_MEMO,
    payload: {
      id: id
    }
  };
};
