import React from 'react';
import PropTypes from 'prop-types';
import './Month.css';

import Calendar from 'react-calendar';
import AllMemos from './AllMemos';

import WithManageMemo from '../containers/WithManageMemo';

const Month = ({ onClickDay, day, memos }) => {
  return (
    <div className='up'>
      <div className='title'>
        <h1>My Calendar with Redux</h1>
      </div>
      <div className='content'>
        <div className='calendarContainer'>
          <Calendar
            className='calendar'
            onClickDay={day=>{onClickDay(day, memos)}}
          />
        </div>
        <div className='allMemos'>
          <AllMemos
            memos={memos} />
        </div>
      </div>
      {day &&
        <WithManageMemo />
      }
    </div>
  )
}

Month.propTypes = {
  onClickDay: PropTypes.func.isRequired,
  day: PropTypes.string,
  memos: PropTypes.any,
};

export default Month;
