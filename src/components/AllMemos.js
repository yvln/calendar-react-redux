import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AllMemos.css';

import OneMemo from './OneMemo';

class AllMemos extends Component {

  allMemos = (memos, day) => {
      return memos.map(memo => {
        return (
          <li className='item-memo'
            key={memo.index}
            data-id={memo.index}>
            <OneMemo
              day={day}
              date={memo.date}
              dataid={memo.index}
              text={memo.text.content}
              deleteItem={this.props.deleteItem}
            />
          </li>
        )
      })
  }

  render() {
    const { memos, day } = this.props;

    return (
      <ul className='allMemosList'>
        {this.allMemos(memos, day)}
      </ul>
    )
  }
}

AllMemos.propTypes = {
  memos: PropTypes.any,
  day: PropTypes.any,
  deleteItem: PropTypes.func,
};

export default AllMemos;
