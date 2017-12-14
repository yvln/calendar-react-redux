import actionTypes from './actionTypes';

export const displayDetailsDays = (day, memos) => {
  let memosFilter;
  if (day === 'All Memos') {
    memosFilter = [...memos];
  } else {
    if (memos) {
      memosFilter = memos.filter(e => {return e.date === day});
    } else {
      memosFilter = []
    }
  }
  return {
    type: actionTypes.DISPLAY_DETAILS_DAY,
    payload: {
      day: day,
      memos: memosFilter,
    },
  };
};

export const addAMemo = (text, dayCalendar, index) => {
  let day = new Date().getDate();
  if (day < 10) {
    day = '0'+day
  }
  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();
  const fullDate = `${day}/${month}/${year}`;
  return {
    type: actionTypes.ADD_A_MEMO,
    payload: {
      index: index,
      date: dayCalendar,
      text: {
        date: fullDate,
        content: text,
      }
    },
  };
};

export const deleteAMemo = (index) => {
  return {
    type: actionTypes.DELETE_A_MEMO,
    payload: {
      index: index
    },
  };
};
